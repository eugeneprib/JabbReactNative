import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Heading, HeadingType, PlainText } from 'src/components'
import { NavigationScreen } from 'src/common/enums'
import { Podcast } from 'src/common/types'
import styles from './styles'

type Props = {
  podcast: Podcast
  navigation: any
}

const Item: React.FC<Props> = ({ podcast, navigation }) => {
  const handleBackToPodcast = () => {
    navigation.navigate(NavigationScreen.PODCAST, { id: podcast.id })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.podcastItem}
      onPress={handleBackToPodcast}
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

export default Item
