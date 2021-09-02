import React from 'react'
import { View } from 'react-native'
import { Heading, HeadingType } from 'src/components'
import styles from './styles'

const NoEpisodes = () => {
  return (
    <View style={styles.nothing}>
      <Heading
        type={HeadingType.SMALL}
        label="Oops. There is no episodes here"
      />
    </View>
  )
}

export default NoEpisodes
