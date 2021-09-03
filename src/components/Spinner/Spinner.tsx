import React from 'react'
import { View, ActivityIndicator, ViewStyle } from 'react-native'
import { DEFAULT_TYPE } from './common/constants'
import { SpinnerType, SpinnerSize } from './common/enum'
import { getStylesByType } from './common/helpers'

type Props = {
  wrapperStyle: ViewStyle
  type?: SpinnerType
  size?: SpinnerSize
}

const Spinner: React.FC<Props> = ({
  wrapperStyle,
  type = DEFAULT_TYPE,
  size = SpinnerSize.LARGE
}) => {
  const typeStyles = getStylesByType(type)

  return (
    <View style={wrapperStyle}>
      <ActivityIndicator size={size} color={typeStyles} />
    </View>
  )
}

export default Spinner
