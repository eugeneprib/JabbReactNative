import React, { useEffect } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/hooks'
import { Heading, HeadingType, PlainText, Spinner } from 'src/components'
import { loadEpisodePayload, addToRecentlyPlayed } from 'src/store/actions'
import { DataStatus } from 'src/common/enums'
import { ACTIVE_OPACITY, DEFAULT_IMAGE_BASE64 } from 'src/common/constants'
import BackButton from 'src/assets/images/backButton.svg'
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
  const { episode, recentlyPlayedEpisodes, popularEpisodes, dataStatus } =
    useAppSelector(({ episode, home }) => ({
      episode: episode.data,
      recentlyPlayedEpisodes: home.recentlyPlayedEpisodes,
      popularEpisodes: home.popularEpisodes,
      dataStatus: episode.dataStatus
    }))

  const dispatch = useDispatch()

  const isLoading = dataStatus === DataStatus.PENDING

  const handleGoBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (route.params?.id) {
      dispatch(loadEpisodePayload(route.params.id))
    }
  }, [route])

  useEffect(() => {
    if (episode) {
      const mappedEpisode = mapEpisodeToRecentlyPlayedEpisode(
        episode,
        route.params?.author,
        route.params?.podcast,
        route.params?.position
      )
      dispatch(addToRecentlyPlayed(mappedEpisode))
    }
  }, [episode])

  useEffect(() => {
    if (route.params?.id) {
      return
    }

    if (recentlyPlayedEpisodes.length) {
      const [lastRecentlyPlayedEpisode] = recentlyPlayedEpisodes
      dispatch(loadEpisodePayload(lastRecentlyPlayedEpisode.id))
      return
    }

    const [popularEpisode] = popularEpisodes
    dispatch(loadEpisodePayload(popularEpisode.id))
  }, [])

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
          activeOpacity={ACTIVE_OPACITY}
          onPress={handleGoBack}
        >
          <BackButton width={40} />
        </TouchableOpacity>
        <PlainText style={styles.headerText} label="Now Playing" />
      </View>
      <Image
        source={{ uri: episode?.image?.url ?? DEFAULT_IMAGE_BASE64 }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.description}>
        <PlainText
          label={route.params?.author ?? 'Undefined'}
          style={styles.authorName}
        />
        <Heading
          label={route.params?.podcast ?? episode.name}
          type={HeadingType.LARGE}
          numberOfLines={2}
          style={styles.podcastName}
        />
        <PlainText
          label={
            route.params?.podcast
              ? `Ep.${route.params.position}: ${episode.name}`
              : ''
          }
          numberOfLines={2}
          style={styles.episodesName}
        />
      </View>
      <View style={styles.playerWrapper}>
        {episode.record ? (
          <Player
            episode={mapEpisodeToPlayerEpisode(episode, route.params?.author)}
            startToPlay={route.params?.playback}
          />
        ) : (
          <PlainText label="There's no any record yet." />
        )}
      </View>
    </View>
  )
}

export default Episode
