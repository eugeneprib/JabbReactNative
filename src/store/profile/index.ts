import { createSlice } from '@reduxjs/toolkit'
import { DataStatus } from 'src/common/enums'
import { Podcast, User } from 'src/common/types'
import { loadPodcasts } from './action'

type State = {
  dataStatus: DataStatus
  podcasts: Podcast[]
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  podcasts: []
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPodcasts.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadPodcasts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.podcasts = action.payload
    })
    builder.addCase(loadPodcasts.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
  }
})

const reducer = profileSlice.reducer

export { reducer }
