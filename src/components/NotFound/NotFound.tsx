import React from 'react'
import { View } from 'react-native'
import { Heading, HeadingType } from 'src/components'
import styles from './styles'

type Props = {
  label: string
}

const NotFound: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Heading type={HeadingType.SMALL} label={label} />
    </View>
  )
}

export default NotFound
