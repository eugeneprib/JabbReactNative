import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationScreen } from 'src/common/enums'
import { tabOptions } from './common/tabOptions'
import { tabPages } from './common/tabPages'
import styles from './styles'

const Tab = createBottomTabNavigator()

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationScreen.HOME}
      screenOptions={tabOptions}
    >
      {tabPages.map((tab, inx) => {
        return (
          <Tab.Screen
            name={tab.name}
            component={tab.component}
            key={inx}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.viewContainer}>
                  <tab.Icon width={17} opacity={focused ? 1 : 0.2} />
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
