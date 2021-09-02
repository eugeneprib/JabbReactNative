import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Heading, HeadingType, PlainText } from 'src/components'
import { NavigationScreen } from 'src/common/enums'
import { Podcast } from 'src/common/types'
import styles from './styles'

type Props = {
  podcast: Podcast
}

const PodcastItem: React.FC<Props> = ({ podcast }) => {
  const navigation = useNavigation()

  const handleToPodcast = () => {
    navigation.navigate(NavigationScreen.PODCAST)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.podcastItem}
      onPress={handleToPodcast}
    >
      <Image
        width={85}
        height={85}
        source={{ uri: podcast.image?.url }}
        style={styles.imagePodcast}
      />
      <View style={styles.podcastItemTextContainer}>
        <Heading
          style={{ fontSize: 19 }}
          type={HeadingType.LARGE}
          label={podcast.name}
        />
        <PlainText
          style={{ fontSize: 12, marginTop: 5 }}
          label={podcast.user.nickname}
        />
      </View>
    </TouchableOpacity>
  )
}

export default PodcastItem
