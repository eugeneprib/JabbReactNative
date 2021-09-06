import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './auth'
import { reducer as profileReducer } from './profile'
import { reducer as podcastReducer } from './podcast'
import { reducer as homeReducer } from './home'
import { reducer as episodeReducer } from './episode'
import { reducer as searchReducer } from './search'

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  profile: profileReducer,
  episode: episodeReducer,
  podcast: podcastReducer,
  search: searchReducer
})

export default rootReducer
