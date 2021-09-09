import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  AsyncThunkConfig,
  User,
  UserSignInPayload,
  LoadCurrentUserPayload
} from 'src/common/types'
import { SecureStorageKey } from 'src/common/enums'
import { ActionType } from './common'

const signIn = createAsyncThunk<User, UserSignInPayload, AsyncThunkConfig>(
  ActionType.SIGN_IN,
  async (loginPayload, { extra }) => {
    const { authApi, secureStorageService } = extra
    const { user, token } = await authApi.signIn(
      loginPayload as UserSignInPayload
    )

    secureStorageService.setItem(SecureStorageKey.TOKEN, token)

    return user
  }
)

const getCurrentUser = createAsyncThunk<
  LoadCurrentUserPayload,
  undefined,
  AsyncThunkConfig
>(ActionType.LOAD_USER, async (_args, { extra }) => {
  const { authApi, secureStorageService } = extra
  const token = await secureStorageService.getItem(SecureStorageKey.TOKEN)

  const currentUser = token ? await authApi.getCurrentUser() : null

  return { token, currentUser }
})

const resetUser = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  ActionType.RESET_USER,
  async (_args, { extra }) => {
    const { secureStorageService } = extra
    secureStorageService.removeItem(SecureStorageKey.TOKEN)
  }
)

export { signIn, getCurrentUser, resetUser }
