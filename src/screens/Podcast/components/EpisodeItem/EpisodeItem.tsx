import React, { useCallback } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ACTIVE_OPACITY } from 'src/common/constants'
import { Episode } from 'src/common/types'
import { getFormattedDate, DateFormatType } from 'src/helpers'
import { Heading, HeadingType, PlainText } from 'src/components'
import { NavigationScreen } from 'src/common/enums'
import PlayIcon from 'src/assets/images/playEpisode.svg'
import { PodcastScreenNavigationProp } from '../../common/types'
import styles from './styles'

type Props = {
  episode: Episode
  position: number
  author: string
  podcast: string
}

const EpisodeItem: React.FC<Props> = ({
  episode,
  position,
  author,
  podcast
}) => {
  const navigation = useNavigation<PodcastScreenNavigationProp>()

  const getDefaultNavigationProps = useCallback(() => {
    return {
      author,
      podcast,
      position,
      id: episode.id
    }
  }, [author, podcast, position, episode.id])

  const handleNavigateToEpisode = () => {
    navigation.navigate(NavigationScreen.EPISODE, getDefaultNavigationProps())
  }

  const handleNavigateToEpisodeAndPlay = () => {
    const defaultProps = getDefaultNavigationProps()

    navigation.navigate(NavigationScreen.EPISODE, {
      ...defaultProps,
      playback: true
    })
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={ACTIVE_OPACITY}
      onPress={handleNavigateToEpisode}
    >
      <View style={styles.episodeNumberCont}>
        <PlainText label={`Ep. ${position}`} style={styles.episodeNumber} />
      </View>
      <View style={styles.episodeInfo}>
        <Heading
          label={episode.name}
          type={HeadingType.SMALL}
          style={styles.episodeInfoTitle}
        />
        <PlainText
          label={getFormattedDate(
            episode.createdAt,
            DateFormatType.MONTH_DAY_YEAR
          )}
          style={styles.episodeInfoDate}
        />
      </View>
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        onPress={handleNavigateToEpisodeAndPlay}
      >
        <PlayIcon width={35} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default EpisodeItem
