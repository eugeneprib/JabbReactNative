import * as Keychain from 'react-native-keychain'
import { Http } from './http'
import { AuthApi } from './auth-api'
import { Storage } from './storage'
import { UserApi } from './user-api'

const storage = new Storage({
  storage: Keychain
})

const http = new Http({
  storage
})

const authApi = new AuthApi({
  http,
  apiPrefix: '/api/v1'
})

const userApi = new UserApi({
  http,
  apiPrefix: '/api/v1'
})

export { authApi, storage, userApi }
