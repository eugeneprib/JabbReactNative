import React, { useEffect } from 'react'
import {
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/hooks'
import { Heading, HeadingType, PlainText, Spinner } from 'src/components'
import {
  loadEpisodePayload,
  resetEpisodeState,
  addToRecentlyPlayed
} from 'src/store/actions'
import { DataStatus } from 'src/common/enums'
import BackButton from 'src/assets/images/backButton.svg'
import DefaultImage from 'src/assets/images/defaultImage.svg'
import {
  EpisodeScreenNavigationProp,
  EpisodeScreenRouteProp
} from './common/types'
import {
  mapEpisodeToPlayerEpisode,
  mapEpisodeToRecentlyPlayedEpisode
} from './helpers'
import Player from './components/Player'
import styles from './styles'

type Props = {
  navigation: EpisodeScreenNavigationProp
  route: EpisodeScreenRouteProp
  podcastName: string
}

const Episode: React.FC<Props> = ({ navigation, route, podcastName }) => {
  const { episode, dataStatus } = useAppSelector(({ episode }) => ({
    episode: episode.data,
    dataStatus: episode.dataStatus
  }))

  const dispatch = useDispatch()

  const isLoading = dataStatus === DataStatus.PENDING
  const { id, author, playback } = route.params

  useEffect(() => {
    dispatch(loadEpisodePayload(id))

    return () => {
      dispatch(resetEpisodeState())
    }
  }, [id])

  useEffect(() => {
    if (episode) {
      const mappedEpisode = mapEpisodeToRecentlyPlayedEpisode(episode, author)
      dispatch(addToRecentlyPlayed(mappedEpisode))
    }
  }, [episode])

  const handleBack = () => {
    navigation.goBack()
  }

  if (isLoading) {
    return <Spinner />
  }

  if (!episode) {
    return (
      <View style={styles.center}>
        <PlainText label="Oops, there is no such episode." />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={handleBack}
        >
          <BackButton width={40} />
        </TouchableOpacity>
        <PlainText style={styles.headerText} label="Now Playing" />
      </View>

      <ImageBackground
        source={{ uri: episode?.image?.url }}
        resizeMode="cover"
        style={styles.image}
      >
        {!episode.image && <DefaultImage />}
      </ImageBackground>

      <View style={styles.designationBlock}>
        <Heading label={podcastName ?? episode.name} type={HeadingType.LARGE} />
        {podcastName && (
          <PlainText label={episode.name} style={styles.episodesName} />
        )}
      </View>

      <View style={styles.playerWrapper}>
        {episode.record ? (
          <Player
            episode={mapEpisodeToPlayerEpisode(episode, author)}
            startToPlay={playback}
          />
        ) : (
          <PlainText label="There's no any record yet." />
        )}
      </View>
    </View>
  )
}

export default Episode
