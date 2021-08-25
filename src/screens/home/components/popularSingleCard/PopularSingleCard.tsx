import React from 'react'
import {
  Text,
  View,
  ImageStyle,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { Heading, HeadingType } from 'src/components'
import { styles } from './styles'

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
          <Text style={styles.author}>{author}</Text>
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
