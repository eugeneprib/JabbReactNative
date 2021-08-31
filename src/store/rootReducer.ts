import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './auth'
import { reducer as podcastReducer } from './podcast'

const rootReducer = combineReducers({
  auth: authReducer,
  podcast: podcastReducer
})

export default rootReducer
