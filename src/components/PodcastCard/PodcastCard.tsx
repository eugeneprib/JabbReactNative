import React from 'react'
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native'
import { DateFormatType, getFormattedDate } from 'src/helpers'
import TimeIcon from 'src/assets/images/time.svg'
import styles from './styles'
import { Heading, HeadingType, PlainText } from '../'

type Props = {
  title: string
  author: string
  date: string
  image?: string
  style?: ViewStyle
  onPress?: () => void
}

const PodcastCard: React.FC<Props> = ({
  title,
  author,
  date,
  image,
  style,
  onPress
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <Image
        width={85}
        height={85}
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Heading type={HeadingType.SMALL} label={title} />
        <PlainText style={styles.author} label={author} />
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

export default PodcastCard
