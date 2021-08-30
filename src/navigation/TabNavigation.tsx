import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, PodcastPage, SignIn } from 'src/screens'
import { NavigationScreen } from 'src/common/enums'
import HomeIcon from 'src/assets/images/home.svg'
import Play from 'src/assets/images/playNavigation.svg'
import User from 'src/assets/images/meIcon.svg'
import styles from './styles'

const Tab = createBottomTabNavigator()

const TabNavigation: React.FC = () => {
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
        name={NavigationScreen.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewContainer}>
              <HomeIcon width={17} opacity={focused ? 1 : 0.2} />
              <Text
                style={
                  focused
                    ? styles.textNavigation
                    : styles.textNavigationWithOpacity
                }
              >
                {NavigationScreen.HOME}
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name={NavigationScreen.LISTENING}
        component={PodcastPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewContainer}>
              <Play width={17} opacity={focused ? 1 : 0.2} />
              <Text
                style={
                  focused
                    ? styles.textNavigation
                    : styles.textNavigationWithOpacity
                }
              >
                {NavigationScreen.LISTENING}
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name={NavigationScreen.MY_PROFILE}
        component={SignIn}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewContainer}>
              <User width={17} opacity={focused ? 1 : 0.2} />
              <Text
                style={
                  focused
                    ? styles.textNavigation
                    : styles.textNavigationWithOpacity
                }
              >
                {NavigationScreen.MY_PROFILE}
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation
