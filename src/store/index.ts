import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import {
  authApi,
  storage as storageService,
  userApi,
  podcastApi
} from 'src/services'
import { handleError as handleErrorMiddleware } from 'src/middleware'

const extraArgument = {
  authApi,
  podcastApi,
  userApi,
  storageService
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
