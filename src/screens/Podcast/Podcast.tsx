import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRoute, useNavigation } from '@react-navigation/native'
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { useAppSelector } from 'src/hooks'
import { DataStatus } from 'src/common/enums'
import {
  loadPodcast as loadPodcastAction,
  loadEpisodesByPodcastId as loadEpisodesByPodcastIdAction,
  resetPodcastState as resetPodcastStateAction
} from 'src/store/actions'
import {
  Heading,
  HeadingType,
  NotFound,
  PlainText,
  Spinner
} from 'src/components'
import { ACTIVE_OPACITY, DEFAULT_IMAGE_BASE64 } from 'src/common/constants'
import BackButton from 'src/assets/images/backButton.svg'
import CircleIcon from 'src/assets/images/circle.svg'
import {
  DEFAULT_EPISODES_PAGINATION,
  DEFAULT_EPISODES_LIMIT
} from './common/constants'
import {
  PodcastScreenRouteProp,
  PodcastScreenNavigationProp
} from './common/types'
import { EpisodeList } from './components'
import globalStyles from 'src/styles/globalStyles'
import styles from './styles'

const Podcast: React.FC = () => {
  const {
    podcast,
    episodes,
    dataStatus,
    totalCount,
    hasMoreEpisodes,
    episodesDataStatus
  } = useAppSelector(({ podcast }) => ({
    podcast: podcast.podcast,
    episodes: podcast.episodes,
    dataStatus: podcast.dataStatus,
    totalCount: podcast.totalCount,
    hasMoreEpisodes: podcast.hasMoreEpisodes,
    episodesDataStatus: podcast.episodesDataStatus
  }))

  const route = useRoute<PodcastScreenRouteProp>()
  const navigation = useNavigation<PodcastScreenNavigationProp>()

  const isPodcastFetching = dataStatus === DataStatus.PENDING
  const isEpisodesFetching = episodesDataStatus === DataStatus.PENDING

  const dispatch = useDispatch()

  const fetchEpisodes = (pagination = DEFAULT_EPISODES_PAGINATION) => {
    dispatch(
      loadEpisodesByPodcastIdAction({
        podcastId: Number(route.params.id),
        filter: pagination
      })
    )
  }

  const handleLoadEpisodes = () => {
    if (hasMoreEpisodes) {
      fetchEpisodes({
        offset: episodes.length,
        limit: DEFAULT_EPISODES_LIMIT
      })
    }
  }

  const handleNavigateBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    dispatch(loadPodcastAction(Number(route.params.id)))
    handleLoadEpisodes()
    return () => {
      dispatch(resetPodcastStateAction())
    }
  }, [])

  if (isPodcastFetching) {
    return <Spinner />
  }

  return (
    <View style={[globalStyles.container, styles.container]}>
      {podcast ? (
        <>
          <View style={styles.podcastBackgroundWrapper}>
            <ImageBackground
              source={{ uri: podcast.cover?.url ?? DEFAULT_IMAGE_BASE64 }}
              resizeMode="cover"
              style={styles.podcastBackground}
            >
              <TouchableOpacity
                onPress={handleNavigateBack}
                style={styles.backButton}
                activeOpacity={ACTIVE_OPACITY}
              >
                <BackButton width={45} />
              </TouchableOpacity>
              <View style={styles.podcastLogoContainer}>
                <Image
                  source={{ uri: podcast.image?.url ?? DEFAULT_IMAGE_BASE64 }}
                  resizeMode="cover"
                  style={styles.podcastLogo}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={styles.podcastNameContainer}>
            <Heading
              label={podcast.name}
              type={HeadingType.LARGE}
              style={styles.podcastName}
            />
          </View>
          <View style={styles.podcasterNameContainer}>
            <PlainText
              label={podcast.user.nickname}
              style={styles.podcastAuthorText}
            />
          </View>
          <View style={styles.description}>
            <PlainText
              label={podcast.description}
              style={styles.descriptionText}
            />
          </View>
          <View style={styles.episodeCounter}>
            <CircleIcon width={5} style={{ marginTop: 4 }} />
            <PlainText
              label={`${totalCount} Episodes`}
              style={styles.edisodesCount}
            />
          </View>
          <View style={styles.episodesContainer}>
            <PlainText label="Episodes" style={styles.episodesContainerTitle} />
            <EpisodeList
              episodes={episodes}
              author={podcast.user.nickname}
              podcast={podcast.name}
              onEndReached={handleLoadEpisodes}
              isEpisodesFetching={isEpisodesFetching}
            />
          </View>
        </>
      ) : (
        <NotFound label="Oops. There is no such podcast" />
      )}
    </View>
  )
}

export default Podcast
