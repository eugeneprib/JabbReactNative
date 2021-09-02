import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Episode } from 'src/common/types'
import { getFormattedDate, DateFormatType } from 'src/helpers'
import { Heading, HeadingType, PlainText } from 'src/components'
import { NavigationScreen } from 'src/common/enums'
import PlayIcon from 'src/assets/images/playEpisode.svg'
import { PodcastScreenNavigationProp } from '../../common/types'
import styles from './styles'

type Props = {
  position: number
  episode: Episode
}

const EpisodeItem: React.FC<Props> = ({ position, episode }) => {
  const navigation = useNavigation<PodcastScreenNavigationProp>()

  const handleNavigateToEpisode = () => {
    navigation.navigate(NavigationScreen.EPISODE, { id: episode.id })
  }

  const handleNavigateToEpisodeAndPlay = () => {
    navigation.navigate(NavigationScreen.EPISODE, {
      id: episode.id,
      playback: true
    })
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
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
        activeOpacity={0.7}
        onPress={handleNavigateToEpisodeAndPlay}
      >
        <PlayIcon width={35} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default EpisodeItem
