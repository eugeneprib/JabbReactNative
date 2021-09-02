import React from 'react'
import { View } from 'react-native'
import { Heading, HeadingType } from 'src/components'
import styles from './styles'

const NoPodcast: React.FC = () => {
  return (
    <View style={styles.nothing}>
      <Heading
        type={HeadingType.LARGE}
        label="Oops. There is no such podcast"
      />
    </View>
  )
}

export default NoPodcast
