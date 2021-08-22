import React from 'react'
import { TextInputProps, ViewStyle } from 'react-native'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

type Props = {
  label: string
  value?: string
  hasMultipleRows?: boolean
  isSecure?: boolean
  style?: ViewStyle
} & TextInputProps

const Input: React.FC<Props> = ({
  label,
  value,
  isSecure = false,
  hasMultipleRows = false,
  style,
  ...props
}) => {
  return (
    <View style={style}>
      <Text style={[styles.text]}>{label}</Text>
      <TextInput
        {...props}
        value={value}
        style={[styles.input]}
        multiline={hasMultipleRows}
        secureTextEntry={isSecure}
      />
    </View>
  )
}

export default Input
