import React, { useCallback } from 'react'
import {
  TouchableOpacity,
  Alert,
  Linking,
  Text,
  TouchableOpacityProps,
  TextStyle
} from 'react-native'
import styles from './styles'

type Props = {
  label: string
  url: string
  textStyle: TextStyle
} & TouchableOpacityProps

const Link: React.FC<Props> = ({ label, url, textStyle, ...props }) => {
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
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Link
