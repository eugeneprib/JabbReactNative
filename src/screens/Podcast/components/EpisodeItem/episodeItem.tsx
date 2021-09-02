import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Episode } from 'src/common/types'
import { getFormattedDate, DateFormatType } from 'src/helpers'
import PlayIcon from 'src/assets/images/playEpisode.svg'
import { Heading, HeadingType, PlainText } from 'src/components'
import styles from './styles'

type Props = {
  episodePosition: number
  episode: Episode
}

const EpisodeItem: React.FC<Props> = ({ episodePosition, episode }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.episodeNumberCont}>
        <PlainText
          label={`Ep. ${episodePosition}`}
          style={styles.episodeNumber}
        />
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
      <TouchableOpacity activeOpacity={0.7}>
        <PlayIcon width={35} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default EpisodeItem
