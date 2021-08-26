import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { Heading, HeadingType } from 'src/components'
import PlayIcon from 'src/assets/images/play.svg'
import styles from './styles'

type Props = {
  title: string
  author: string
  source?: string
  onPress?: () => void
}

const SuggestedPodcastCard: React.FC<Props> = ({
  title,
  author,
  source,
  onPress
}) => {
  return (
    <ImageBackground source={{ uri: source }} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.author}>{author}</Text>
        <View style={styles.description}>
          <Heading
            label={title}
            type={HeadingType.LARGE}
            style={styles.title}
            numberOfLines={2}
          />
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={0.85}
            onPress={onPress}
          >
            <PlayIcon width={12} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default SuggestedPodcastCard
