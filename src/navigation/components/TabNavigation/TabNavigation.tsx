import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationScreen } from 'src/common/enums'
import { tabPages } from './pages'
import { tabOptions } from './options'
import ActiveIcon from 'src/assets/images/activeBar.svg'
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
                  {focused && <ActiveIcon width={24} />}
                  <tab.Icon width={20} opacity={focused ? 1 : 0.3} />
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
