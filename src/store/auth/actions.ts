import { createAsyncThunk } from '@reduxjs/toolkit'
import { AsyncThunkConfig, User, UserSignInPayload } from 'src/common/types'
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

const loadToken = createAsyncThunk<string | null, undefined, AsyncThunkConfig>(
  ActionType.LOAD_TOKEN,
  async (_args, { extra, dispatch }) => {
    const { secureStorageService } = extra
    const token = await secureStorageService.getItem(SecureStorageKey.TOKEN)
    if (token) {
      await dispatch(getCurrentUser())
    }
    return token
  }
)

const getCurrentUser = createAsyncThunk<User, undefined, AsyncThunkConfig>(
  ActionType.LOAD_USER,
  async (_args, { extra }) => {
    const { authApi } = extra
    return await authApi.getCurrentUser()
  }
)

const resetUser = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  ActionType.RESET_USER,
  async (_args, { extra }) => {
    const { secureStorageService } = extra
    secureStorageService.removeItem(SecureStorageKey.TOKEN)
  }
)

export { signIn, loadToken, getCurrentUser, resetUser }
