import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView, StatusBar } from 'react-native'
import Toast from 'react-native-toast-message'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './navigation'
import { store } from './store'
import styles from 'src/styles/globalStyles'

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.statusBar}>
          <StatusBar
            backgroundColor={styles.statusBar.backgroundColor}
            barStyle="dark-content"
          />
          <Navigation />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}

export default App
