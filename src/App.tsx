import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView, Text, View } from 'react-native'
import Toast from 'react-native-toast-message'
import styles from 'src/styles/globalStyles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Heading } from './components'
import store from './store'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Heading>Home Screen</Heading>
      <Text style={styles.greeting}>Hello there. This is the App!!!</Text>
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
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}

export default App
