import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/hooks'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, Home, PodcastPage } from 'src/screens'
import { NavigationScreen, StorageKey } from 'src/common/enums'
import { storage } from 'src/services'
import { getCurrentUser } from 'src/store/actions'

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
    storage
      .getItem(StorageKey.TOKEN)
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
        <>
          <Stack.Screen
            name={NavigationScreen.PODCAST}
            component={PodcastPage}
          />
          <Stack.Screen name={NavigationScreen.HOME} component={Home} />
        </>
      ) : (
        <Stack.Screen name={NavigationScreen.SIGN_IN} component={SignIn} />
      )}
    </Stack.Navigator>
  )
}

export default Navigation
