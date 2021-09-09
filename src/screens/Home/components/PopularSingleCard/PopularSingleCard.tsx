import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {
  View,
  ImageStyle,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { ACTIVE_OPACITY } from 'src/common/constants'
import { Heading, HeadingType, PlainText } from 'src/components'
import { DIVISION_REMAINDER, EVEN_RATIO } from './common/constants'
import styles from './styles'
import { HomeScreenNavigationProp } from '../../common/types'
import { NavigationScreen } from 'src/common/enums'

type Props = {
  id: number
  position: number
  title: string
  author: string
  source?: string
  style?: ImageStyle
}

const PopularSingleCard: React.FC<Props> = ({
  id,
  position,
  title,
  author,
  source,
  style
}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const isCardRight = Boolean(position % EVEN_RATIO !== DIVISION_REMAINDER)

  const handleNavigateToEpisode = () => {
    navigation.navigate(NavigationScreen.EPISODE, { id, author })
  }

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
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
