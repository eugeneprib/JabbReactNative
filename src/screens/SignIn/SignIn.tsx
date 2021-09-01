import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { AppError } from 'src/common/enums'
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

const SignIn: React.FC = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (): void => {
    SignInValidationSchema.validate({ email, password })
      .then((payload: UserSignInPayload) => {
        dispatch(signIn(payload))
      })
      .catch((err) => {
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
          <View style={styles.intro}>
            <PlainText label={'Welcome to Jabber'} style={styles.introText} />
            <PlainText label={`Let's sign you in`} style={styles.introText} />
          </View>
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
          <View style={styles.registerBlock}>
            <PlainText
              label={`Don’t have an account? `}
              style={[styles.registerText, styles.registerDescription]}
            />
            <Link
              label="Register"
              url={REGISTER_URL}
              textStyle={styles.registerText}
            />
          </View>
          <Button
            label="Sign in"
            onPress={handleSubmit}
            style={styles.button}
            type={ButtonType.PRIMARY}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignIn
