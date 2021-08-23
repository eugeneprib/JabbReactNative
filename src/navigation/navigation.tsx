import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, Home } from 'src/screens'
import { NavigationScreens } from 'src/common/enums'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen
        name={NavigationScreens.SIGN_IN}
        component={SignIn}
        options={{
          title: 'Login',
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      />
      <Stack.Screen name={NavigationScreens.HOME} component={Home} />
    </Stack.Navigator>
  )
}

export default Navigation
