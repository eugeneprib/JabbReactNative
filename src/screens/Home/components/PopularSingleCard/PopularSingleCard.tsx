import React from 'react'
import {
  View,
  ImageStyle,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { Heading, HeadingType, PlainText } from 'src/components'
import { DIVISION_REMAINDER, EVEN_RATIO } from './common/constants'
import styles from './styles'

type Props = {
  id: number
  position: number
  title: string
  author: string
  source?: string
  style?: ImageStyle
  onPress: (author: string, id: number) => void
}

const PopularSingleCard: React.FC<Props> = ({
  id,
  position,
  title,
  author,
  source,
  style,
  onPress
}) => {
  const isCardRight = Boolean(position % EVEN_RATIO !== DIVISION_REMAINDER)

  const handleNavigateToEpisode = () => {
    onPress(author, id)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style, isCardRight && styles.cardRight]}
      onPress={handleNavigateToEpisode}
    >
      <ImageBackground source={{ uri: source }} style={styles.background}>
        <View style={styles.overlay}>
          <PlainText label={author} style={styles.author} />
          <Heading
            label={title}
            type={HeadingType.SMALL}
            style={styles.title}
            numberOfLines={2}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default PopularSingleCard
