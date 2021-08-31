import EncryptedStorage from 'react-native-encrypted-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ENV } from 'src/common/enums'
import { Http } from './http'
import { AuthApi } from './authApi'
import { Notification } from './notification'
import { Storage } from './storage'
import { PodcastApi } from './podcastApi'

const notification = new Notification()

const storage = new Storage({
  storage: AsyncStorage
})

const secureStorage = new Storage({
  storage: EncryptedStorage
})

const http = new Http({
  storage: secureStorage
})

const authApi = new AuthApi({
  http,
  apiPath: ENV.API_PATH
})

const podcastApi = new PodcastApi({
  http,
  apiPath: ENV.API_PATH
})

export { notification, storage, secureStorage, authApi, podcastApi }
