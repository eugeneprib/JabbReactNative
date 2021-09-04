import React, { useEffect } from 'react'
import { View, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/hooks'
import { Heading, HeadingType, PlainText } from 'src/components'
import {
  loadEpisodePayload,
  resetEpisodeState,
  addToRecentlyPlayed
} from 'src/store/actions'
import { DataStatus } from 'src/common/enums'
import { ACTIVE_OPACITY } from 'src/common/constants'
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
}

const Episode: React.FC<Props> = ({ navigation, route }) => {
  const { episode, dataStatus } = useAppSelector(({ episode }) => ({
    episode: episode.data,
    dataStatus: episode.dataStatus
  }))

  const dispatch = useDispatch()

  const isLoading = dataStatus === DataStatus.PENDING
  const { id, position, author, podcast, playback } = route.params

  useEffect(() => {
    dispatch(loadEpisodePayload(id))

    return () => {
      dispatch(resetEpisodeState())
    }
  }, [id])

  useEffect(() => {
    if (episode) {
      const mappedEpisode = mapEpisodeToRecentlyPlayedEpisode(
        episode,
        author,
        podcast,
        position
      )

      dispatch(addToRecentlyPlayed(mappedEpisode))
    }
  }, [episode])

  const handleBack = () => {
    navigation.goBack()
  }

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#f3427f" />
      </View>
    )
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
          activeOpacity={ACTIVE_OPACITY}
          onPress={handleBack}
        >
          <BackButton width={40} />
        </TouchableOpacity>
        <PlainText style={styles.headerText} label="Now Playing" />
      </View>
      {episode.image ? (
        <Image
          source={{ uri: episode.image.url }}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <DefaultImage style={styles.image} />
      )}
      <View style={styles.description}>
        <PlainText label={author} style={styles.authorName} />
        <Heading
          label={podcast}
          type={HeadingType.LARGE}
          numberOfLines={2}
          style={styles.podcastName}
        />
        <PlainText
          label={`Ep.${position}: ${episode.name}`}
          numberOfLines={2}
          style={styles.episodesName}
        />
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
