import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView, Text } from 'react-native'
import styles from 'src/styles/globalStyles'
import store from './store'

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
          <Text style={styles.greeting}>
              Hello there. This is the App</Text>
      </SafeAreaView>
    </Provider>
  )
}

export default App
