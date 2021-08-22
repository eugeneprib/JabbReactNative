import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { DEFAULT_STYLES, DEFAULT_TYPE } from './common/constants'
import { HeadingType } from './common/enums'
import { getStylesByType } from './common/helpers'

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
