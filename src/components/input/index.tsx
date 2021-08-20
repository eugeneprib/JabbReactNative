import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

type Props = {
  placeholder?: string
  hasMultipleRows?: boolean
  isSecure?: boolean
}

const Input: React.FC<Props> = ({
  placeholder = '',
  isSecure = false,
  hasMultipleRows = false
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      multiline={hasMultipleRows}
      secureTextEntry={isSecure}
    />
  )
}

export default Input
