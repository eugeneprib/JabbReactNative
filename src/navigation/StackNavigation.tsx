import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { useAppSelector } from 'src/hooks'
import { SignIn, Podcast, Episode } from 'src/screens'
import { getCurrentUser, loadToken } from 'src/store/actions'
import { DataStatus, NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'
import { TabNavigation } from './components'

const Stack = createStackNavigator<RootStackParamList>()

const StackNavigation: React.FC = () => {
  const { user, token, dataStatus } = useAppSelector(({ auth }) => ({
    user: auth.user,
    token: auth.token,
    dataStatus: auth.dataStatus
  }))

  const dispatch = useDispatch()

  const hasUser = Boolean(user)
  const isLoading = dataStatus === DataStatus.PENDING

  useEffect(() => {
    dispatch(loadToken())
  }, [])

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser())
    }
  }, [token])

  if (isLoading) {
    return null
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
          <Stack.Screen name={NavigationScreen.EPISODE} component={Episode} />
        </>
      ) : (
        <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      )}
    </Stack.Navigator>
  )
}

export default StackNavigation
