import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import {
  authApi,
  storage as storageService,
  podcastApi,
  episodeApi
} from 'src/services'

const extraArgument = {
  authApi,
  storageService,
  podcastApi,
  episodeApi
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument
      }
    })
  }
})

export { extraArgument, store }
