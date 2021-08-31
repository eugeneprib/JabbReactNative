import EncryptedStorage from 'react-native-encrypted-storage'
import { ENV } from 'src/common/enums'
import { Http } from './http'
import { AuthApi } from './authApi'
import { Storage } from './storage'
import { UserApi } from './userApi'
import { PodcastApi } from './podcastApi'
import { EpisodeApi } from './episodeApi'
import { Notification } from './notification'

const notification = new Notification()

const storage = new Storage({
  storage: EncryptedStorage
})

const http = new Http({
  storage
})

const authApi = new AuthApi({
  http,
  apiPath: ENV.API_PATH
})

const userApi = new UserApi({
  http,
  apiPath: ENV.API_PATH
})

const podcastApi = new PodcastApi({
  http,
  apiPath: ENV.API_PATH
})

const episodeApi = new EpisodeApi({
  http,
  apiPath: ENV.API_PATH
})

export { authApi, storage, userApi, notification, podcastApi, episodeApi }
