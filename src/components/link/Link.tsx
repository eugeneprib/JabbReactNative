import React, { useCallback } from 'react'
import {
  TouchableOpacity,
  Alert,
  Linking,
  Text,
  TouchableOpacityProps
} from 'react-native'

type Props = {
  label: string
  url: string
} & TouchableOpacityProps

const Link: React.FC<Props> = ({ label, url, ...props }) => {
  const handlePress = useCallback(async () => {
    const isSupported = await Linking.canOpenURL(url)

    if (isSupported) {
      await Linking.openURL(url)
    } else {
      Alert.alert('Invalid link', `Don't know how to open URL ${url}`)
    }
  }, [url])

  return (
    <TouchableOpacity {...props} onPress={handlePress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default Link
