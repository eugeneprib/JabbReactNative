import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './auth'
import { reducer as userReducer } from './userProfile'
import { reducer as podcastReducer } from './podcast'
import { reducer as homeReducer } from './home'

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  user: userReducer,
  podcast: podcastReducer
})

export default rootReducer
