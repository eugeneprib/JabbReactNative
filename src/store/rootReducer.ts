import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './auth'
import { reducer as homeReducer } from './home'
import { reducer as episodeReducer } from './episode'

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  episode: episodeReducer
})

export default rootReducer
