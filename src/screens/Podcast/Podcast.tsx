import React from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { Heading, HeadingType } from 'src/components'
import { EpisodeBlock } from './components'
import { ScrollView } from 'react-native-gesture-handler'
import BackButton from 'src/assets/images/backButton.svg'
import CircleIcon from 'src/assets/images/circle.svg'
import styles from './styles'

type Episode = {
  id: number
  name: string
  createdAt: string
}

type Podcast = {
  image: string
  background: string
  name: string
  author: string
  description: string
  episodes: Episode[]
}

const mockedPodacst: Podcast = {
  background:
    'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474209/2/wqbm1x3q0h6ea2ebrnze.jpg',
  image:
    'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474124/2/ttp0xygzbdyrn0yyxfnk.jpg',
  name: 'Cartoon Soundtracks',
  author: 'Eugenius',
  description: "Cartoon's Soundtracks Disney, Dreamworks and others",
  episodes: [
    {
      id: 1,
      name: 'Kingdom Dance',
      createdAt: 'August 16, 2021'
    },
    {
      id: 2,
      name: 'You are Welcome',
      createdAt: 'August 20, 2021'
    },
    {
      id: 3,
      name: 'This is Berk',
      createdAt: 'August 26, 2021'
    }
  ]
}

type Props = {
  podcast: Podcast
}

const PodcastPage: React.FC<Props> = ({ podcast }) => {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={{ uri: mockedPodacst.background }}
          resizeMode="cover"
          style={styles.podcastBackground}
        >
          <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
            <BackButton width={40} />
          </TouchableOpacity>
          <View style={styles.podcastLogoContainer}>
            <Image
              source={{ uri: mockedPodacst.image }}
              resizeMode="cover"
              style={styles.podcastLogo}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.podcastNameContainer}>
        <Heading
          label={mockedPodacst.name}
          type={HeadingType.LARGE}
          style={styles.podcastName}
        />
      </View>
      <View style={styles.podcasterNameContainer}>
        <Text style={styles.podcastAuthorText}>{mockedPodacst.author}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{mockedPodacst.description}</Text>
      </View>
      <View style={styles.episodeCounter}>
        <CircleIcon width={5} />
        <Text style={styles.edisodesCount}>{mockedPodacst.episodes.length} Episodes</Text>
      </View>
      <View style={styles.episodesContainer}>
        <Text style={styles.episodesContainerTitle}>Episodes </Text>
        {mockedPodacst.episodes.map((episode: Episode, inx: number) => (
          <EpisodeBlock episode={episode} number={inx} key={episode.id} />
        ))}
      </View>
    </ScrollView>
  )
}

export default PodcastPage
