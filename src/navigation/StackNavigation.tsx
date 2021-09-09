import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { useAppSelector } from 'src/hooks'
import { SignIn, Podcast } from 'src/screens'
import { loadToken } from 'src/store/actions'
import { DataStatus, NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'
import { TabNavigation } from './components'
import { Spinner } from 'src/components'
import styles from './styles'

const Stack = createStackNavigator<RootStackParamList>()

const StackNavigation: React.FC = () => {
  const { user, dataStatus } = useAppSelector(({ auth }) => ({
    user: auth.user,
    dataStatus: auth.dataStatus
  }))

  const dispatch = useDispatch()

  const hasUser = Boolean(user)
  const isLoading = dataStatus === DataStatus.PENDING

  useEffect(() => {
    dispatch(loadToken())
  }, [])

  if (isLoading) {
    return (
      <View style={styles.spinnerContainer}>
        <Spinner />
      </View>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        headerShown: false
      }}
    >
      {hasUser ? (
        <>
          <Stack.Screen
            name={NavigationScreen.TO_TABS_NAVIGATOR}
            component={TabNavigation}
          />
          <Stack.Screen name={NavigationScreen.PODCAST} component={Podcast} />
        </>
      ) : (
        <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      )}
    </Stack.Navigator>
  )
}

export default StackNavigation
