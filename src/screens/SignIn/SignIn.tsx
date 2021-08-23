import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Linking
} from 'react-native'
import { signIn } from 'src/store/actions'
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreens } from 'src/common/enums'
import { SignInValidationSchema } from './validation-schema'
import { styles } from './styles'

type RootStackParamList = {
  Home: undefined
  SignIn: undefined
}

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
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
      .then(
        function (payload) {
          dispatch(signIn(payload))
          navigation.replace(NavigationScreens.HOME)
        }
      )
      .catch(
        function (err) {

        }
      );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.hello}>Hello There</Text>
          <Text style={styles.intro}>Welcome to Jabber</Text>
          <Text style={styles.lets}>Let&apos;s sign you in</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            returnKeyType="next"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            returnKeyType="done"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.bottomBlock}>
          <View style={styles.row}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://google.com')}
            >
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <Button title="Sign In" onPress={handleSignInSubmit} />
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
