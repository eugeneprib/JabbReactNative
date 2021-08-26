import React from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native'
import EpisodeElement from './components/episodeBlock'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'

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
          <View style={styles.podcastLogoContainer}>
          <Image
            source={imagepodcast}
            resizeMode="cover"
            style={styles.podcastLogo}
          ></Image>
          </View>
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
          return <EpisodeElement number={ind} key={ind}/>
        })}
      </View>
    </ScrollView>
  )
}

export default PodcastPage
