import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRoute, useNavigation } from '@react-navigation/native'
import {
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { useAppSelector } from 'src/hooks'
import { DEFAULT_IMAGE_BASE64 } from 'src/common/constants/defaultImage'
import { DataStatus } from 'src/common/enums'
import {
  loadPodcast as loadPodcastAction,
  loadEpisodesByPodcastId as loadEpisodesByPodcastIdAction,
  resetPodcastState as resetPodcastStateAction
} from 'src/store/actions'
import { Heading, HeadingType, PlainText } from 'src/components'
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

import { EpisodeList, NoPodcast } from './components'
import styles from './styles'

const Podcast: React.FC = () => {
  const { podcast, episodes, dataStatus, totalCount, hasMoreEpisodes } =
    useAppSelector(({ podcast }) => ({
      podcast: podcast.podcast,
      episodes: podcast.episodes,
      dataStatus: podcast.dataStatus,
      totalCount: podcast.totalCount,
      hasMoreEpisodes: podcast.hasMoreEpisodes
    }))

  const route = useRoute<PodcastScreenRouteProp>()
  const navigation = useNavigation<PodcastScreenNavigationProp>()

  const isLoading = dataStatus === DataStatus.PENDING

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

  if (isLoading) {
    return (
      <View style={styles.preloaderWrapper}>
        <ActivityIndicator size="large" color="#f3427f" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
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
                activeOpacity={0.7}
              >
                <BackButton width={40} />
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
            <CircleIcon width={5} />
            <PlainText
              label={`${totalCount} Episodes`}
              style={styles.edisodesCount}
            />
          </View>
          <View style={styles.episodesContainer}>
            <Heading
              type={HeadingType.MEDIUM}
              label="Episodes"
              style={styles.episodesContainerTitle}
            />
            <EpisodeList
              episodes={episodes}
              author={podcast.user.nickname}
              onEndReached={handleLoadEpisodes}
            />
          </View>
        </>
      ) : (
        <NoPodcast />
      )}
    </View>
  )
}

export default Podcast
