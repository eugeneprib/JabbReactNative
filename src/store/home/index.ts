import { createSlice } from '@reduxjs/toolkit'
import { DataStatus } from 'src/common/enums'
import { Podcast, RecentlyPlayedEpisode, Episode } from 'src/common/types'
import {
  loadSuggestedPodcasts,
  loadRecentlyPlayedEpisodes,
  loadPopularEpisodes
} from './actions'
import { addToRecentlyPlayed } from '../episode/actions'
import { FIRST_ARRAY_IDX, POPULAR_EPISODES_COUNT } from 'src/common/constants'

type State = {
  dataStatus: DataStatus
  suggestedPodcasts: Podcast[]
  recentlyPlayedEpisodes: RecentlyPlayedEpisode[]
  popular: Episode[]
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  suggestedPodcasts: [],
  recentlyPlayedEpisodes: [],
  popular: []
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
    builder.addCase(addToRecentlyPlayed.fulfilled, (state, action) => {
      state.recentlyPlayedEpisodes = action.payload
    })
    builder.addCase(loadPopularEpisodes.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadPopularEpisodes.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.popular = action.payload.slice(
        FIRST_ARRAY_IDX,
        POPULAR_EPISODES_COUNT
      )
    })
    builder.addCase(loadPopularEpisodes.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
  }
})

const reducer = homeSlice.reducer

export { reducer }
