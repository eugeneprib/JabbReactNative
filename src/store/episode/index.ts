import { createSlice } from '@reduxjs/toolkit'
import { DataStatus } from 'src/common/enums'
import { Episode } from 'src/common/types'
import { loadEpisodePayload, resetState } from './actions'

type State = {
  dataStatus: DataStatus
  data: Episode | null
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  data: null
}

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadEpisodePayload.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadEpisodePayload.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.data = action.payload
    })
    builder.addCase(loadEpisodePayload.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
    builder.addCase(resetState, (state) => {
      Object.assign(state, initialState)
    })
  }
})

const reducer = episodeSlice.reducer

export { reducer }
