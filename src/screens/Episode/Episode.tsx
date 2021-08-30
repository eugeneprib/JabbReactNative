import React from 'react'
import { View, ImageBackground, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'
import { mapEpisodeToPlayerEpisode } from './helpers'
import { Heading, HeadingType, PlainText } from 'src/components'
import Player from './components/Player'
import BackButton from 'src/assets/images/backButton.svg'
import DefaultImage from 'src/assets/images/defaultImage.svg'
import styles from './styles'

const mockedEpisode = {
  id: 4,
  name: 'second episode',
  userId: 1,
  podcastId: 3,
  createdAt: '2021-08-28T09:50:06.000Z',
  updatedAt: '2021-08-28T09:50:06.000Z',
  description: 'second episode description',
  type: 'public',
  imageId: 17,
  status: 'published',
  record: {
    id: 3,
    fileUrl:
      'http://res.cloudinary.com/vitaliy-jabber/video/upload/v1630144209/1/qrpust4yx7nbulscxvs2.mp3',
    fileSize: '13401776.00',
    episodeId: 4,
    createdAt: '2021-08-28T09:50:10.000Z',
    updatedAt: '2021-08-28T09:50:10.000Z',
    publicId: '1/qrpust4yx7nbulscxvs2'
  },
  image: {
    id: 17,
    publicId: '1/ypdhtawxc9s6fx5afkl3',
    url: 'http://res.cloudinary.com/vitaliy-jabber/image/upload/v1630144205/1/ypdhtawxc9s6fx5afkl3.jpg',
    createdAt: '2021-08-28T09:50:06.000Z',
    updatedAt: '2021-08-28T09:50:06.000Z'
  },
  shownotes: []
}

type EpisodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationScreen.EPISODE
>

type Props = {
  navigation: EpisodeScreenNavigationProp
  podcastName?: string
}

const Episode: React.FC<Props> = ({ navigation, podcastName }) => {
  const handleBackToPodcast = () => {
    navigation.replace(NavigationScreen.PODCAST)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={handleBackToPodcast}
        >
          <BackButton width={40} />
        </TouchableOpacity>
        <PlainText style={styles.headerText} label="Now Playing" />
      </View>

      <ImageBackground
        source={{ uri: mockedEpisode.image?.url }}
        resizeMode="cover"
        style={styles.image}
      >
        {!mockedEpisode.image && <DefaultImage />}
      </ImageBackground>

      <View style={styles.designationBlock}>
        <Heading
          label={podcastName ?? mockedEpisode.name}
          type={HeadingType.LARGE}
        />
        {podcastName && (
          <PlainText label={mockedEpisode.name} style={styles.episodesName} />
        )}
      </View>

      <View style={styles.playerWrapper}>
        {mockedEpisode.record ? (
          <Player episode={mapEpisodeToPlayerEpisode(mockedEpisode)} />
        ) : (
          <PlainText label="There's no any record yet." />
        )}
      </View>
    </View>
  )
}

export default Episode
