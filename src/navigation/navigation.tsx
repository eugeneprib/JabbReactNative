import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, Home } from 'src/screens'
import { NavigationScreen } from 'src/common/enums'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationScreen.SIGN_IN}>
      <Stack.Screen
        name={NavigationScreen.SIGN_IN}
        component={SignIn}
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      />
      <Stack.Screen name={NavigationScreen.HOME} component={Home} />
    </Stack.Navigator>
  )
}

export default Navigation
