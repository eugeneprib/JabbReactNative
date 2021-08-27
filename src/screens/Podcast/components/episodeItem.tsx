import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import PlayIcon from 'src/assets/images/playEpisode.svg'
import { Heading, HeadingType, PlainText } from 'src/components'
import styles from './styles'

type Episode = {
  name: string
  createdAt: string
}

type Props = {
  number: number
  episode: Episode
}

const INCREASE_VALUE_FOR_LIST = 1

const EpisodeElement: React.FC<Props> = ({ number, episode }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.episodeNumberCont}>
        <PlainText
          label={`Ep. ${number + INCREASE_VALUE_FOR_LIST}`}
          style={styles.episodeNumber}
        />
      </View>
      <View style={styles.episodeInfo}>
        <Heading
          label={episode.name}
          type={HeadingType.MEDIUM_LESS}
          style={styles.episodeInfoTitle}
        />
        <PlainText label={episode.createdAt} style={styles.episodeInfoDate} />
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <PlayIcon width={35} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default EpisodeElement
