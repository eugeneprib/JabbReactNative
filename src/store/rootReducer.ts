import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './auth'
import { reducer as userReducer } from './userProfile'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
})

export default rootReducer
