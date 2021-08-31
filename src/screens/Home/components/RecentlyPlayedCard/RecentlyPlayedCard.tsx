import React from 'react'
import { Heading, HeadingType, PlainText } from 'src/components'
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native'
import { getFormattedDate, DateFormatType } from 'src/helpers'
import TimeIcon from 'src/assets/images/time.svg'
import styles from './styles'

type Props = {
  title: string
  author: string
  date: string
  source?: string
  style?: ViewStyle
  onPress?: () => void
}

const RecentlyPlayedCard: React.FC<Props> = ({
  title,
  author,
  date,
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
