import { createAsyncThunk } from '@reduxjs/toolkit'
import { asyncThunkConfig, user, userSignInPayload } from 'src/common/types'
import { storageKey } from 'src/common/enums'
import { ActionType } from './common'

const signIn = createAsyncThunk<user, userSignInPayload, asyncThunkConfig>(
  ActionType.SIGN_IN,
  async (loginPayload, { extra }) => {
    const { authApi, storageService } = extra
    const { user, token } = await authApi.signIn(loginPayload)

    storageService.setItem(storageKey.TOKEN, token)

    return user
  }
)

const getCurrentUser = createAsyncThunk<user, undefined, asyncThunkConfig>(
  ActionType.LOAD_USER,
  async (_args, { extra }) => {
    const { authApi } = extra

    const user = await authApi.getCurrentUser()

    return user
  }
)

const resetUser = createAsyncThunk<void, undefined, asyncThunkConfig>(
  ActionType.RESET_USER,
  async (_args, { extra }) => {
    const { storageService } = extra

    storageService.removeItem()
  }
)

export { signIn, getCurrentUser, resetUser }
