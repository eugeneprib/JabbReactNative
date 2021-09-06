import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ACTIVE_OPACITY } from 'src/common/constants'
import { ButtonType } from './common/enum'
import { getStylesByType } from './common/helpers'
import styles from './styles'

type Props = {
  label: string
  type?: ButtonType
} & TouchableOpacityProps

const Button: React.FC<Props> = ({
  label,
  type = ButtonType.PRIMARY,
  ...props
}) => {
  const typeStyles = getStylesByType(type)

  return (
    <TouchableOpacity
      {...props}
      style={[styles.touchable, typeStyles.touchable, props.style]}
      activeOpacity={ACTIVE_OPACITY}
    >
      <Text style={[styles.text, typeStyles.text]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
