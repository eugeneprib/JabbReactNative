import React from 'react';
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Heading, HeadingType } from 'src/components'
import TimeIcon from 'src/assets/images/time.svg'
import { getFormattedDate } from './common/helpers';
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
        <Text style={styles.author}>{author}</Text>
        <View style={styles.date}>
          <TimeIcon width={10} />
          <Text style={styles.time}>{getFormattedDate(date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RecentlyPlayedCard
