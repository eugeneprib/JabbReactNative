import React from 'react'
import { TextInput, TextInputProps, TextStyle } from 'react-native'
import styles from './styles'

type Props = {
  hasMultipleRows?: boolean
  isSecure?: boolean
  style?: TextStyle
} & TextInputProps

const Input: React.FC<Props> = ({
  isSecure = false,
  hasMultipleRows = false,
  style,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
      multiline={hasMultipleRows}
      secureTextEntry={isSecure}
    />
  )
}

export default Input
