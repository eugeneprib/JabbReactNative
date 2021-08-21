import React, { useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  SignIn: undefined;
}

type RegistrationNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>

type Props = {
  navigation: RegistrationNavigationProp;
}

const RegistrationScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpSubmit = (): void => {
    navigation.replace('Home');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.hello}>Sign UPPPPP!!!!!!!!!!</Text>
          <Text style={styles.intro}>Welcome to Jabber</Text>
          <Text style={styles.lets}>Let&apos;s sign you in</Text>
          <TextInput
            style={styles.input}
            placeholder='email'
            returnKeyType='next'
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            autoCapitalize='none'
            autoCompleteType='email'
            textContentType='emailAddress'
            keyboardType='email-address'
          />
          <TextInput
            style={styles.input}
            placeholder='password'
            returnKeyType='done'
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.bottomBlock}>
          <View style={styles.row}>
            <Text>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.replace('SignIn')}
            >
              <Text style={styles.link}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <Button title='Sign Up' onPress={handleSignUpSubmit} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center'
  },
  hello: {
    fontSize: 36,
    fontWeight: '700'
  },
  intro: {
    fontSize: 18
  },
  lets: {
    fontSize: 18,
    marginBottom: 40
  },
  input: {
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 4,
    marginBottom: 15
  },
  bottomBlock: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 25
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 10
  },
  forgot: {
    fontSize: 13
  },
  link: {
    fontWeight: 'bold'
  }
})

export default RegistrationScreen
