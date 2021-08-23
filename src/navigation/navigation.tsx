import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, Home } from 'src/screens'
import { navigationScreens } from 'src/common/enums'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen
        name={navigationScreens.SIGN_IN}
        component={SignIn}
        options={{
          title: 'Login',
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      />
      <Stack.Screen name={navigationScreens.HOME} component={Home} />
    </Stack.Navigator>
  )
}

export default Navigation
