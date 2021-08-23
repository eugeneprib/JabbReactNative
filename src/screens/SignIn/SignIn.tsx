import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Linking
} from 'react-native'
import { signIn } from 'src/store/actions'
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreens } from 'src/common/enums'
import { SignInValidationSchema } from './validation-schema'
import { styles } from './styles'
import { Heading, Input, Button, ButtonType } from 'src/components'

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
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.topBlock}>
          <Heading style={styles.hello} label='Hello There' />
          <Heading style={styles.intro} label='Welcome to Jabber' />
          <Heading style={styles.lets} label='Let&apos;s sign you in' />
          <Input
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
          <Input
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
          <Button 
            label={'Sign in'} 
            onPress={handleSignInSubmit}
            style={styles.button}
            type={ButtonType.PRIMARY}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
