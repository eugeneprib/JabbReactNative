import { createSlice } from '@reduxjs/toolkit'
import { DataStatus } from 'src/common/enums'
import { User } from 'src/common/types'
import { getCurrentUser, loadToken, resetUser, signIn } from './actions'

type State = {
  dataStatus: DataStatus
  token: string | null
  user: User | null
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  token: null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.user = action.payload
    })
    builder.addCase(signIn.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
    builder.addCase(loadToken.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadToken.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.token = action.payload
    })
    builder.addCase(loadToken.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
    builder.addCase(getCurrentUser.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.user = action.payload
    })
    builder.addCase(getCurrentUser.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
    builder.addCase(resetUser.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(resetUser.fulfilled, (state) => {
      state.dataStatus = DataStatus.IDLE
      state.user = null
      state.token = null
    })
    builder.addCase(resetUser.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
  }
})

const reducer = authSlice.reducer

export { reducer }
