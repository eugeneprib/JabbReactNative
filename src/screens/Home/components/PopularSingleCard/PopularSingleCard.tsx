import React from 'react'
import {
  View,
  ImageStyle,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { Heading, HeadingType, PlainText } from 'src/components'
import styles from './styles'

type Props = {
  title: string
  author: string
  source?: string
  style?: ImageStyle
  onPress?: () => void
}

const PopularSingleCard: React.FC<Props> = ({
  title,
  author,
  source,
  style,
  onPress
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      onPress={onPress}
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
