import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'
import { Navigation } from './navigation'
import { NavigationContainer } from '@react-navigation/native'
import { store } from './store'
import styles from 'src/styles/globalStyles'
import Toast from 'react-native-toast-message'

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Navigation />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}

export default App
