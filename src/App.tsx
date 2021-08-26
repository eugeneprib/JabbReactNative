import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'
import Toast from 'react-native-toast-message'
import { Navigation } from './navigation'
import { NavigationContainer } from '@react-navigation/native'
import { store } from './store'
import styles from 'src/styles/globalStyles'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './screens'

const Stack = createStackNavigator()

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Navigation />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: '#fff' }
              }}
            />
          </Stack.Navigator>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}

export default App
