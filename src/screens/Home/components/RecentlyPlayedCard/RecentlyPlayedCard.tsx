import React from 'react'
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Heading, HeadingType, PlainText } from 'src/components'
import { getFormattedDate, DateFormatType } from 'src/helpers'
import { NavigationScreen } from 'src/common/enums'
import { ACTIVE_OPACITY } from 'src/common/constants'
import { RecentlyPlayedEpisode } from 'src/common/types'
import { HomeScreenNavigationProp } from 'src/screens/Home/common/types'
import TimeIcon from 'src/assets/images/time.svg'
import styles from './styles'

type Props = {
  episode: RecentlyPlayedEpisode
  style?: ViewStyle
}

const RecentlyPlayedCard: React.FC<Props> = ({
  episode: { id, position, title, author, podcast, date, source },
  style
}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handleNavigateToEpisode = () => {
    navigation.navigate(NavigationScreen.EPISODE, {
      id,
      author,
      podcast,
      position
    })
  }

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      style={[styles.container, style]}
      onPress={handleNavigateToEpisode}
    >
      <Image source={{ uri: source }} style={styles.image} />
      <View>
        <Heading label={title} type={HeadingType.SMALL} numberOfLines={2} />
        <PlainText label={author} style={styles.author} />
        <View style={styles.date}>
          <TimeIcon width={10} />
          <PlainText
            label={getFormattedDate(
              date,
              DateFormatType.MONTH_DAY_HOURS_MINUTES
            )}
            style={styles.time}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RecentlyPlayedCard
