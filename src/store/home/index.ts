import { createSlice } from '@reduxjs/toolkit'
import { DataStatus } from 'src/common/enums'
import { Podcast, RecentlyPlayedEpisode } from 'src/common/types'
import { loadSuggestedPodcasts, loadRecentlyPlayedEpisodes } from './actions'

type State = {
  dataStatus: DataStatus
  suggestedPodcasts: Podcast[]
  recentlyPlayedEpisodes: RecentlyPlayedEpisode[]
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  suggestedPodcasts: [],
  recentlyPlayedEpisodes: []
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadSuggestedPodcasts.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadSuggestedPodcasts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.suggestedPodcasts = action.payload.results
    })
    builder.addCase(loadSuggestedPodcasts.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
    builder.addCase(loadRecentlyPlayedEpisodes.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadRecentlyPlayedEpisodes.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.recentlyPlayedEpisodes = action.payload
    })
    builder.addCase(loadRecentlyPlayedEpisodes.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
  }
})

const reducer = homeSlice.reducer

export { reducer }
