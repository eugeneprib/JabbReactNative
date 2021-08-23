import React from 'react'
import { Text, TextProps } from 'react-native'
import { DEFAULT_TYPE } from './common/constants'
import { HeadingType } from './common/enums'
import { getStylesByType } from './common/helpers'
import { styles } from './styles'

type Props = {
  label: string
  type?: HeadingType
} & TextProps

const Heading: React.FC<Props> = ({ label, type = DEFAULT_TYPE, ...props }) => {
  const typeStyles = getStylesByType(type)

  return (
    <Text {...props} style={[styles.text, typeStyles.text, props.style]}>
      {label}
    </Text>
  )
}

export default Heading
