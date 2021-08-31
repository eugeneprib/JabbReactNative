import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { useAppSelector } from 'src/hooks'
import { SignIn, Home } from 'src/screens'
import { secureStorage } from 'src/services'
import { getCurrentUser } from 'src/store/actions'
import { NavigationScreen, SecureStorageKey } from 'src/common/enums'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
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
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
      }}
    >
      {hasUser ? (
        <Stack.Screen name={NavigationScreen.HOME} component={Home} />
      ) : (
        <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      )}
    </Stack.Navigator>
  )
}

export default Navigation
