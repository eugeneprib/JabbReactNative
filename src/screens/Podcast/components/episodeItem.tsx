import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PlayIcon from 'src/assets/images/playEpisode.svg'

type Episode = {
  name: string;
  createdAt: string;
}

type Props = {
    number: number;
    episode: Episode;
}

const INCREASE_VALUE_FOR_LIST = 1;

const EpisodeElement: React.FC<Props> = ({number, episode}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.episodeNumberCont}>
        <Text style={styles.episodeNumber}>Ep. {number+ INCREASE_VALUE_FOR_LIST}</Text>
      </View>
      <View style={styles.episodeInfo}>
        <Text style={styles.episodeInfoTitle}>{episode.name}</Text>
        <Text style={styles.episodeInfoDate}>{episode.createdAt}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <PlayIcon width={35} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default EpisodeElement
