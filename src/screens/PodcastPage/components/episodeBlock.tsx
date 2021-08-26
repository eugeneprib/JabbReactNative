import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
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

const EpisodeElement: React.FC<Props> = ({number, episode}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.episodeNumberCont}>
        <Text style={styles.episodeNumber}>Ep. {number+1}</Text>
      </View>
      <View style={styles.episodeInfo}>
        <Text style={styles.episodeInfoTitle}>{episode.name}</Text>
        <Text style={styles.episodeInfoDate}>{episode.createdAt}</Text>
      </View>
      <TouchableOpacity>
        <PlayIcon width={35} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default EpisodeElement
