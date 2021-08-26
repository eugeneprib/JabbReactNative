import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5,
        marginBottom: 10,
        height: 50,
    },
    episodeNumberCont:{
        flex: 0.1,
        width: 20,
    },
    episodeNumber: {
        textAlign: 'center',
        fontSize: 12,
        fontStyle: 'italic',
    },
    episodeInfo: {
        flex: 0.9,
        paddingHorizontal: 30,
        justifyContent: 'space-around',
    },
    episodeInfoTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        width: 200,
    },
    episodeInfoDate: {
        fontSize: 10,
        marginTop: 10,
        color: '#555',
    },
    episodePlay: {
        flex: 0.1,
    }
})

export default EpisodeElement
