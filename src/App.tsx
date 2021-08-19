import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { Alert, SafeAreaView, Text, View } from 'react-native'
import styles from 'src/styles/globalStyles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import store from './store'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text style={styles.greeting}>Hello there. This is the App</Text>
    </View>
  )
}

const Stack = createStackNavigator()

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}

export default App
