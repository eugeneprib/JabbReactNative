import React from 'react'
import { Button, Pressable, Text } from 'react-native'
import { ButtonType } from './button-type.enum'
import styles from './button-style'

type Props = {
  title: string
  onClick?: () => void
  type: ButtonType
}

const CustomButton: React.FC<Props> = ({ title, onClick, type }) => {
  if (type === ButtonType.PRIMARY) {
    return (
      <Pressable style={styles.buttonPrimary} onPress={onClick}>
        <Text style={styles.textPrimary}>{title}</Text>
      </Pressable>
    )
  } else {
    return (
      <Pressable style={styles.buttonSecondary} onPress={onClick}>
        <Text style={styles.textSecondary}>{title}</Text>
      </Pressable>
    )
  }
}

export default CustomButton
