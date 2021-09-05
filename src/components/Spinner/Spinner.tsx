import React from 'react'
import { View, ActivityIndicator, ViewStyle } from 'react-native'
import { AppColor } from 'src/common/enums'
import { SpinnerSize } from './common/enum'
import styles from './styles'

type Props = {
  wrapperStyle?: ViewStyle
  color?: AppColor
  size?: SpinnerSize
}

const Spinner: React.FC<Props> = (props) => {
  const {
    wrapperStyle = styles.defaultWrapper,
    color = AppColor.PRIMARY,
    size = SpinnerSize.LARGE
  } = props

  return (
    <View style={wrapperStyle}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Spinner
