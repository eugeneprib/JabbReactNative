import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, Home, Player } from 'src/screens'
import { NavigationScreen } from 'src/common/enums'
import { Button } from 'src/components'
import { Text } from 'react-native-svg'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationScreen.PLAYER}
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        headerShown: false
      }}
    >
      <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      <Stack.Screen name={NavigationScreen.HOME} component={Home} />
      <Stack.Screen name={NavigationScreen.PLAYER} component={Player} />
    </Stack.Navigator>
  )
}

export default Navigation
