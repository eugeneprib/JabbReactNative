import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationScreen } from 'src/common/enums'
import { tabPages } from './pages'
import { tabOptions } from './options'
import styles from './styles'

const Tab = createBottomTabNavigator()

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationScreen.HOME}
      screenOptions={tabOptions}
    >
      {tabPages.map((tab, idx) => {
        return (
          <Tab.Screen
            name={tab.name}
            component={tab.component}
            key={idx}
            options={{
              tabBarHideOnKeyboard: true,
              tabBarIcon: ({ focused }) => (
                <View style={styles.viewContainer}>
                  <tab.Icon width={17} opacity={focused ? 1 : 0.3} />
                  <Text
                    style={
                      focused
                        ? styles.textNavigation
                        : styles.textNavigationWithOpacity
                    }
                  >
                    {tab.name}
                  </Text>
                </View>
              )
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default TabNavigation
