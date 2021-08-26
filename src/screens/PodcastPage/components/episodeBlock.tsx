import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'

type Props = {
    number: number;
}

const EpisodeElement: React.FC<Props> = ({number}) => {
  return (
    <View style={styles.container}>
      <View style={styles.episodeNumberCont}>
        <Text style={styles.episodeNumber}>Ep. {number+1}</Text>
      </View>
      <View style={styles.episodeInfo}>
        <Text style={styles.episodeInfoTitle}>Kingdom Dance</Text>
        <Text style={styles.episodeInfoDate}>August 26, 2021</Text>
      </View>
      <View style={styles.episodePlay}>
        <Button title="a" onPress={()=>console.log('a')}></Button>
      </View>
    </View>
  )
}

export default EpisodeElement
