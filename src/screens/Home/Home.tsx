import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from 'src/styles/globalStyles'

const Home: React.FC = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text style={styles.greeting}>Hello there. This is the App!!!</Text>
      </View>
    </ScrollView>
  )
}

export default Home
