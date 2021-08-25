import React from 'react'
import { Image, TouchableOpacity, ViewStyle } from 'react-native'
import AvatarIcon from 'src/assets/images/user.svg'
import { styles } from './styles'

type Props = {
  source?: string
  style?: ViewStyle
  onPress?: () => void
}

const UserAvatar: React.FC<Props> = ({ source, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {source ? (
        <Image source={{ uri: source }} style={styles.image} />
      ) : (
        <AvatarIcon width={25} />
      )}
    </TouchableOpacity>
  )
}

export default UserAvatar
