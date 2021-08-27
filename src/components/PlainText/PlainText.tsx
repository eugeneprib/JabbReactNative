import { Text, TextProps } from 'react-native'
import React from 'react'
import styles from './styles'

type Props = {
  label: string
} & TextProps

const PlainText: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {label}
    </Text>
  )
}

export default PlainText
