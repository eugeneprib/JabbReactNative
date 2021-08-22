import { createReducer } from '@reduxjs/toolkit'
import { dataStatus } from 'src/common/enums'
import { signIn, getCurrentUser, resetUser } from 'src/store/actions'
import { user } from 'src/common/types'

type State = {
  dataStatus: dataStatus
  user: user | null
}

const initialState: State = {
  dataStatus: dataStatus.IDLE,
  user: null
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(signIn.pending, (state) => {
    state.dataStatus = dataStatus.PENDING
  })
  builder.addCase(signIn.fulfilled, (state, action) => {
    state.dataStatus = dataStatus.FULFILLED
    state.user = action.payload
  })
  builder.addCase(signIn.rejected, (state) => {
    state.dataStatus = dataStatus.REJECTED
  })
  builder.addCase(getCurrentUser.pending, (state) => {
    state.dataStatus = dataStatus.PENDING
  })
  builder.addCase(getCurrentUser.fulfilled, (state, action) => {
    state.dataStatus = dataStatus.FULFILLED
    state.user = action.payload
  })
  builder.addCase(getCurrentUser.rejected, (state) => {
    state.dataStatus = dataStatus.REJECTED
  })
  builder.addCase(resetUser.fulfilled, (state) => {
    state.dataStatus = dataStatus.IDLE
    state.user = null
  })
})

export { reducer }
