import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native'
import EpisodeElement from './components/episodeBlock'
import { ScrollView } from 'react-native-gesture-handler'

const win = Dimensions.get('window')

const PodcastPage: React.FC = () => {
  const image = {
    uri: 'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474209/2/wqbm1x3q0h6ea2ebrnze.jpg'
  }

  const imagepodcast = {
    uri: 'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474124/2/ttp0xygzbdyrn0yyxfnk.jpg'
  }

  const a: number[] = [1, 2, 3, 4];

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.podcastBackground}
        >
          <View style={styles.backButton}>
          </View>
          <Image
            source={imagepodcast}
            resizeMode="cover"
            style={styles.podcastLogo}
          ></Image>
        </ImageBackground>
      </View>
      <View style={styles.podcastNameContainer}>
        <Text style={styles.podcastName}>Cartoon Soundtracks</Text>
      </View>
      <View style={styles.podcastNameContainer}>
        <Text style={styles.podcastAuthorText}>Eugenius</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          laborum.
        </Text>
      </View>
      <View style={styles.episodeCounter}>
        <Text>4 Episodes</Text>
      </View>
      <View style={styles.episodesContainer}>
        <Text style={styles.episodesContainerTitle}>Episodes </Text>
        {a.map((val: any, ind: number) => {
          return <EpisodeElement number={ind}/>
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  podcastBackground: {
    flex: 1,
    height: 150,
    width: win.width,
    marginBottom: 65
  },
  podcastLogo: {
    flex: 1,
    height: 120,
    width: 120,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -60,
    borderRadius: 5
  },
  podcastNameContainer: {
    marginTop: 5,
    alignItems: 'center'
  },
  podcastName: {
    textAlign: 'center',
    fontSize: 24,
    width: 250,
    fontWeight: 'bold'
  },
  podcastAuthorText: {
    color: '#000',
    fontSize: 15,
  },
  description: {
    alignItems: 'center'
  },
  descriptionText: {
    textAlign: 'center',
    width: 300,
    marginTop: 7,
    lineHeight: 20,
    color: '#555'
  },
  episodeCounter: {
    alignItems: 'center',
    marginTop: 20,
  },
  episodesContainer: {
    marginTop: 20,
    paddingHorizontal: 35,
  },
  episodesContainerTitle: {
    fontSize: 20,
    color: '#444',
    fontWeight: 'bold',
    marginBottom: 20
  },
  backButton: {
      backgroundColor: '#aaa',
      width: 45,
      height: 45,
      margin: 10,
  }
})

export default PodcastPage
