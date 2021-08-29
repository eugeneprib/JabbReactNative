import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, PodcastPage, SignIn } from 'src/screens'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import HomeIcon from 'src/assets/images/home.svg'
import Play from 'src/assets/images/playNavigation.svg'
import User from 'src/assets/images/meIcon.svg'
import styles from './styles'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Nav: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationScreen.SIGN_IN}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
      }}
    >
      <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      <Stack.Screen name={NavigationScreen.TABS_NAV} component={navigation} />
    </Stack.Navigator>
  )
}

const navigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationScreen.HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: 'rgb(35,35,35)',
          height: 70,
          borderRadius: 10,
          marginBottom: 10,
          marginHorizontal: 10,
          elevation: 5
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.viewContainer}>
                <HomeIcon width={17} opacity={focused ? 1 : 0.2} />
                <Text
                  style={
                    focused
                      ? styles.textNavigation
                      : styles.textNavigationWithOpacity
                  }
                >
                  Home
                </Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="Listening"
        component={PodcastPage}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.viewContainer}>
                <Play width={17} opacity={focused ? 1 : 0.2} />
                <Text
                  style={
                    focused
                      ? styles.textNavigation
                      : styles.textNavigationWithOpacity
                  }
                >
                  Listening
                </Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={SignIn}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.viewContainer}>
                <User width={17} opacity={focused ? 1 : 0.2} />
                <Text
                  style={
                    focused
                      ? styles.textNavigation
                      : styles.textNavigationWithOpacity
                  }
                >
                  Me
                </Text>
              </View>
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default Nav
