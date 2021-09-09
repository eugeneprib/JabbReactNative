import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { useAppSelector } from 'src/hooks'
import { secureStorage } from 'src/services'
import { SignIn, Podcast } from 'src/screens'
import { getCurrentUser } from 'src/store/actions'
import { NavigationScreen, SecureStorageKey } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'
import { TabNavigation } from './components'

const Stack = createStackNavigator<RootStackParamList>()

const StackNavigation: React.FC = () => {
  const { user } = useAppSelector(({ auth }) => ({
    user: auth.user
  }))

  const dispatch = useDispatch()

  const [isFirstLoading, setIsFirstLoading] = useState(true)
  const [token, setToken] = useState<string | null>(null)

  const hasToken = Boolean(token)
  const hasUser = Boolean(user)

  const isUserExistsAndNotLoaded = hasToken && !hasUser

  useEffect(() => {
    secureStorage
      .getItem(SecureStorageKey.TOKEN)
      .then(setToken)
      .then(() => setIsFirstLoading(false))
  }, [])

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser())
    }
  }, [token])

  if (isFirstLoading || isUserExistsAndNotLoaded) {
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
        </>
      ) : (
        <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      )}
    </Stack.Navigator>
  )
}

export default StackNavigation
