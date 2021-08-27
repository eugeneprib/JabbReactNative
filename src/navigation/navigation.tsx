import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, Home, Player } from 'src/screens'
import { NavigationScreen } from 'src/common/enums'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationScreen.PLAYER}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
      }}
    >
      <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      <Stack.Screen name={NavigationScreen.HOME} component={Home} />
      <Stack.Screen name={NavigationScreen.PLAYER} component={Player} />
    </Stack.Navigator>
  )
}

export default Navigation
