import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { HeadingType } from 'src/common/enums'
import { DEFAULT_STYLES, DEFAULT_TYPE } from './constants'
import { getStylesByType } from './helpers'

type Props = {
  children: string
  type?: HeadingType
  styles?: StyleProp<TextStyle>
}

const Heading: React.FC<Props> = ({
  children,
  type = DEFAULT_TYPE,
  styles = DEFAULT_STYLES
}) => {
  return <Text style={[getStylesByType(type), styles]}>{children}</Text>
}

export default Heading
