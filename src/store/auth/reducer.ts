import { createReducer } from '@reduxjs/toolkit'
import { DataStatus } from 'src/common/enums'
import { signIn, getCurrentUser, resetUser } from 'src/store/actions'
import { User } from 'src/common/types'

type State = {
  dataStatus: DataStatus
  user: User | null
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  user: null
}

const reducer = createReducer(initialState, (builder) => {
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
  builder.addCase(resetUser.fulfilled, (state) => {
    state.dataStatus = DataStatus.IDLE
    state.user = null
  })
})

export { reducer }
