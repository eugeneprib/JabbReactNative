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

  const { id, author = '', podcast, position, playback } = route.params ?? {}
  const isLoading = dataStatus === DataStatus.PENDING

  const handleNavigateBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (id) {
      dispatch(loadEpisodePayload(id))
    }
  }, [route])

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

  useEffect(() => {
    if (id) {
      return
    }

    if (recentlyPlayedEpisodes.length) {
      const [lastRecentlyPlayedEpisode] = recentlyPlayedEpisodes
      dispatch(loadEpisodePayload(lastRecentlyPlayedEpisode.id))
      return
    }

    const [popularEpisode] = popularEpisodes

    navigation.setParams({ author: popularEpisode.user.nickname })
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
          onPress={handleNavigateBack}
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
        <PlainText label={author} style={styles.authorName} />
        <Heading
          label={podcast ?? episode.name}
          type={HeadingType.LARGE}
          numberOfLines={2}
          style={styles.podcastName}
        />
        <PlainText
          label={podcast && position ? `Ep.${position}: ${episode.name}` : ''}
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
