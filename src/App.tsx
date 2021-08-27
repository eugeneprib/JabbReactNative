import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'
import Toast from 'react-native-toast-message'
import styles from 'src/styles/globalStyles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Player } from './screens'
import store from './store'

const Stack = createStackNavigator()

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="Player">
            <Stack.Screen
              name="Player"
              component={Player}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: '#fff' }
              }}
            />
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
