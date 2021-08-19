import React from 'react'
import { Alert, Linking, TouchableOpacity, Text } from 'react-native'

type Props = {
  link: string
  title: string
}

const Link: React.FC<Props> = ({ title, link }) => {
  const handleClick = () => {
    Linking.canOpenURL(link).then((supported) => {
      if (supported) {
        Linking.openURL(link)
      } else {
        Alert.alert('Invalid link', `Don't know how to open URI: ${link}`)
      }
    })
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Link
