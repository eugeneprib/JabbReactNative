import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignInScreen, HomeScreen } from 'src/screens'
import { navigationScreens } from 'src/common/enums'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen
        name={navigationScreens.SIGN_IN}
        component={SignInScreen}
        options={{
          title: 'Login',
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      />
      <Stack.Screen
        name={navigationScreens.HOME}
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}

export default Navigation
