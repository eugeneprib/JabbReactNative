import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useAppSelector } from 'src/hooks'
import {
  DEFAULT_EPISODES_PAGINATION,
  DEFAULT_IMAGE
} from 'src/common/constants'
import { Episode } from 'src/common/types'
import {
  loadPodcast as loadPodcastAction,
  loadEpisodesByPodcastId as loadEpisodesByPodcastIdAction
} from 'src/store/actions'
import { Heading, HeadingType, PlainText } from 'src/components'
import { EpisodeItem } from './components/EpisodeItem'
import BackButton from 'src/assets/images/backButton.svg'
import CircleIcon from 'src/assets/images/circle.svg'
import styles from './styles'

const PodcastPage: React.FC = () => {
  const id = 47

  const { podcast, episodes } = useAppSelector(({ podcast }) => ({
    podcast: podcast.podcast,
    episodes: podcast.episodes
  }))
  const hasEpisodes = Boolean(episodes?.length)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPodcastAction(Number(id)))
    dispatch(
      loadEpisodesByPodcastIdAction({
        podcastId: Number(id),
        filter: DEFAULT_EPISODES_PAGINATION
      })
    )
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {podcast ? (
        <>
          <View>
            <ImageBackground
              source={{ uri: podcast.cover?.url ?? DEFAULT_IMAGE }}
              resizeMode="cover"
              style={styles.podcastBackground}
            >
              <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
                <BackButton width={40} />
              </TouchableOpacity>
              <View style={styles.podcastLogoContainer}>
                <Image
                  source={{ uri: podcast.image?.url ?? DEFAULT_IMAGE }}
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
              label={`${episodes.length} Episodes`}
              style={styles.edisodesCount}
            />
          </View>
          <View style={styles.episodesContainer}>
            <Heading
              type={HeadingType.MEDIUM}
              label={`Episodes`}
              style={styles.episodesContainerTitle}
            />
            {hasEpisodes ? (
              episodes.map((episode: Episode, inx: number) => (
                <EpisodeItem episode={episode} number={inx} key={episode.id} />
              ))
            ) : (
              <View style={styles.nothing}>
                <Heading
                  type={HeadingType.SMALL}
                  label={'Oops. There is no episodes here'}
                />
              </View>
            )}
          </View>
        </>
      ) : (
        <View style={styles.nothing}>
          <Heading
            type={HeadingType.LARGE}
            label={'Oops. There is no such podcast'}
          />
        </View>
      )}
    </ScrollView>
  )
}

export default PodcastPage
