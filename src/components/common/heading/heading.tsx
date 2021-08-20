import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { HeadingType } from 'src/common/enums/enums'
import { getStyles } from './common/helper/helper'

type Props = {
  type: HeadingType
  children?: string
  styles?: StyleProp<TextStyle>
}

const Heading: React.FC<Props> = ({ children, type, styles = {} }) => {
  return <Text style={[getStyles(type), styles]}>{children}</Text>
}

export default Heading
