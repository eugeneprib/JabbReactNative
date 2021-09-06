import { createSlice } from '@reduxjs/toolkit'
import { ARRAY_OFFSET } from 'src/common/constants/'
import { DataStatus } from 'src/common/enums'
import { Podcast } from 'src/common/types'
import { loadMorePodcasts, loadPodcasts } from './actions'

type State = {
  dataStatus: DataStatus
  podcasts: Podcast[]
  totalPagesCount: number
  currentPageIdx: number
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  podcasts: [],
  totalPagesCount: 0,
  currentPageIdx: 0
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPodcasts.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadPodcasts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.podcasts = action.payload.results
      state.totalPagesCount = action.payload.totalPagesCount
    })
    builder.addCase(loadPodcasts.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
    builder.addCase(loadMorePodcasts.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadMorePodcasts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.podcasts = state.podcasts.concat(action.payload.results)
      state.totalPagesCount = action.payload.totalPagesCount
      state.currentPageIdx += ARRAY_OFFSET
    })
    builder.addCase(loadMorePodcasts.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
  }
})

const reducer = searchSlice.reducer

export { reducer }
