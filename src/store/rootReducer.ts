import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './auth'
import { reducer as podcastReducer } from './podcast'
import { reducer as homeReducer } from './home'

const rootReducer = combineReducers({
  auth: authReducer,
  podcast: podcastReducer,
  home: homeReducer
})

export default rootReducer
