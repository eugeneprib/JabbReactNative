import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './auth'
import { reducer as homeReducer } from './home'

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer
})

export default rootReducer
