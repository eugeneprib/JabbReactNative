import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppError, NavigationScreen } from 'src/common/enums'
import { UserSignInPayload } from 'src/common/types'
import {
  Heading,
  Input,
  Button,
  ButtonType,
  Link,
  HeadingType,
  PlainText
} from 'src/components'
import { signIn } from 'src/store/actions'
import { notification } from 'src/services'
import { REGISTER_URL } from './common/constants'
import { SignInValidationSchema } from './validationSchema'
import styles from './styles'

type RootStackParamList = {
  [NavigationScreen.HOME]: undefined
  [NavigationScreen.SIGN_IN]: undefined
}

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationScreen.SIGN_IN
>

type Props = {
  navigation: SignInScreenNavigationProp
}

const SignIn: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSignInSubmit = (): void => {
    SignInValidationSchema.validate({ email, password })
      .then(function (payload: UserSignInPayload | undefined) {
        dispatch(signIn(payload))
        navigation.replace(NavigationScreen.HOME)
      })
      .catch(function (err) {
        notification.error(
          AppError.VALIDATION_ERROR,
          JSON.stringify(err.message)
        )
      })
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyBoardAvoidContainer}
      behavior="height"
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Heading type={HeadingType.HUGE} label="Hello There" />
          <PlainText label={'Welcome to Jabber'} style={styles.intro} />
          <PlainText label={`Let's sign you in`} style={styles.lets} />
          <Input
            style={styles.input}
            placeholder="Email"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Input
            style={styles.input}
            placeholder="Password"
            returnKeyType="done"
            value={password}
            onChangeText={setPassword}
            isSecure
          />
        </View>
        <View style={styles.bottomBlock}>
          <View style={styles.row}>
            <PlainText label={`Don’t have an account? `} />
            <Link label="Register" url={REGISTER_URL} />
          </View>
          <Button
            label="Sign in"
            onPress={handleSignInSubmit}
            style={styles.button}
            type={ButtonType.PRIMARY}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignIn
