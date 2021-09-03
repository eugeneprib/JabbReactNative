import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { DEFAULT_TYPE } from './common/constants'
import { SpinnerType, SpinnerSize } from './common/enum'
import { getStylesByType } from './common/helpers'
import styles from './styles'

type Props = {
  type?: SpinnerType
  size?: SpinnerSize
}

const Spinner: React.FC<Props> = ({
  type = DEFAULT_TYPE,
  size = SpinnerSize.LARGE
}) => {
  const typeStyles = getStylesByType(type)

  return (
    <View style={styles.spinnerWrapper}>
      <ActivityIndicator size={size} color={typeStyles} />
    </View>
  )
}

export default Spinner
