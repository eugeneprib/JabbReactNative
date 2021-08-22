import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  AsyncThunkConfig,
  User,
  UserSignInPayload
} from 'src/common/types'
import { StorageKey } from 'src/common/enums'
import { ActionType } from './common'

const signIn = createAsyncThunk<User, UserSignInPayload, AsyncThunkConfig>(
  ActionType.SIGN_IN,
  async (loginPayload, { extra }) => {
    const { authApi, storageService } = extra
    const { user, token } = await authApi.signIn(loginPayload)

    storageService.setItem(StorageKey.TOKEN, token)

    return user
  }
)

const getCurrentUser = createAsyncThunk<User, undefined, AsyncThunkConfig>(
  ActionType.LOAD_USER,
  async (_args, { extra }) => {
    const { authApi } = extra

    const user = await authApi.getCurrentUser()

    return user
  }
)

const resetUser = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  ActionType.RESET_USER,
  async (_args, { extra }) => {
    const { storageService } = extra

    storageService.removeItem(StorageKey.TOKEN)
  }
)

export { signIn, getCurrentUser, resetUser }
