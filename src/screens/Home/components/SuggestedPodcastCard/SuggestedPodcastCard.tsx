import React from 'react'
import { ImageBackground, TouchableOpacity, View } from 'react-native'
import { Heading, HeadingType, PlainText } from 'src/components'
import { ACTIVE_OPACITY } from 'src/common/constants'
import PlayIcon from 'src/assets/images/play.svg'
import styles from './styles'

type Props = {
  title: string
  author: string
  source?: string
  onHandleNavigateToPodcast?: () => void
  onHandleNavigateToEpisode?: () => void
}

const SuggestedPodcastCard: React.FC<Props> = ({
  title,
  author,
  source,
  onHandleNavigateToPodcast,
  onHandleNavigateToEpisode
}) => {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      onPress={onHandleNavigateToPodcast}
    >
      <ImageBackground source={{ uri: source }} style={styles.container}>
        <View style={styles.overlay}>
          <PlainText label={author} style={styles.author} />
          <View style={styles.description}>
            <Heading
              label={title}
              type={HeadingType.LARGE}
              style={styles.title}
              numberOfLines={2}
            />
            <TouchableOpacity
              style={styles.icon}
              activeOpacity={ACTIVE_OPACITY}
              onPress={onHandleNavigateToEpisode}
            >
              <PlayIcon width={12} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default SuggestedPodcastCard
