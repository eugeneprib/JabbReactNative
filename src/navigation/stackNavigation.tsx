import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import { SignIn } from 'src/screens'
import TabNavigation from './tabNavigation'

const Stack = createStackNavigator()

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationScreen.SIGN_IN}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
      }}
    >
      <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      <Stack.Screen
        name={NavigationScreen.TABS_NAV}
        component={TabNavigation}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation
