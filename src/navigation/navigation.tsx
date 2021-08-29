import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, Home, Episode, Podcast } from 'src/screens'
import { NavigationScreen } from 'src/common/enums'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationScreen.EPISODE}
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        headerShown: false
      }}
    >
      <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      <Stack.Screen name={NavigationScreen.HOME} component={Home} />
      <Stack.Screen name={NavigationScreen.PODCAST} component={Podcast} />
      <Stack.Screen name={NavigationScreen.EPISODE} component={Episode} />
    </Stack.Navigator>
  )
}

export default Navigation
