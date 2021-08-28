import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, PodcastPage, SignIn } from 'src/screens'
import { StyleSheet, View, Text } from 'react-native'
import HomeIcon from 'src/assets/images/home.svg'
import Play from 'src/assets/images/playNavigation.svg'
import User from 'src/assets/images/meIcon.svg'
import { NavigationScreen } from 'src/common/enums'

const Tab = createBottomTabNavigator()

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationScreen.HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: 'rgba(25,25,25,0.95)',
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
            if (focused) {
              return (
                <View style={styles.viewContainer}>
                  <HomeIcon width={17} />
                  <Text style={styles.textNavigation}>Home</Text>
                </View>
              )
            } else {
              return (
                <View style={styles.viewContainer}>
                  <HomeIcon width={17} opacity={0.2} />
                  <Text style={styles.textNavigationWithOpacity}>Home</Text>
                </View>
              )
            }
          }
        }}
      />
      <Tab.Screen
        name="Listening"
        component={PodcastPage}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View style={styles.viewContainer}>
                  <Play width={17} />
                  <Text style={styles.textNavigation}>Listening</Text>
                </View>
              )
            } else {
              return (
                <View style={styles.viewContainer}>
                  <Play width={17} opacity={0.2} />
                  <Text style={styles.textNavigationWithOpacity}>
                    Listening
                  </Text>
                </View>
              )
            }
          }
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={SignIn}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View style={styles.viewContainer}>
                  <User width={17} />
                  <Text style={styles.textNavigation}>Me</Text>
                </View>
              )
            } else {
              return (
                <View style={styles.viewContainer}>
                  <User width={17} opacity={0.2} />
                  <Text style={styles.textNavigationWithOpacity}>Me</Text>
                </View>
              )
            }
          }
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  viewContainer: { alignItems: 'center', flexDirection: 'row' },
  textNavigation: { color: '#fff', marginLeft: 10, fontSize: 12 },
  textNavigationWithOpacity: {
    color: '#ffffff66',
    marginLeft: 10,
    fontSize: 12
  }
})

export default Tabs
