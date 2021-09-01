import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import {
  authApi,
  podcastApi,
  storage as storageService,
  secureStorage as secureStorageService
} from 'src/services'
import { handleError as handleErrorMiddleware } from 'src/middleware'

const extraArgument = {
  authApi,
  podcastApi,
  storageService,
  secureStorageService
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument
      }
    }).concat(handleErrorMiddleware)
  }
})

export { extraArgument, store }
