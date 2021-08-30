import { API_ORIGIN_URL, API_PREFIX } from 'react-native-dotenv'

const ENV = {
  API_PATH: `${API_ORIGIN_URL + API_PREFIX}`
} as const

export { ENV }
