import React from 'react'
import { Text, View } from 'react-native'
import styles from 'src/styles/globalStyles'
import { createStackNavigator } from '@react-navigation/stack'
import { SignInScreen } from 'src/screens'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text style={styles.greeting}>Hello there. This is the App!!!</Text>
    </View>
  )
}

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Login',
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default Navigation
