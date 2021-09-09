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
  suggestedPodcasts: Podcast[]
  suggestedPodcastsDataStatus: DataStatus
  recentlyPlayedEpisodes: RecentlyPlayedEpisode[]
  recentlyPlayedEpisodesDataStatus: DataStatus
  popularEpisodes: Episode[]
  popularEpisodesDataStatus: DataStatus
}

const initialState: State = {
  suggestedPodcasts: [],
  suggestedPodcastsDataStatus: DataStatus.IDLE,
  recentlyPlayedEpisodes: [],
  recentlyPlayedEpisodesDataStatus: DataStatus.IDLE,
  popularEpisodes: [],
  popularEpisodesDataStatus: DataStatus.IDLE
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadSuggestedPodcasts.pending, (state) => {
      state.suggestedPodcastsDataStatus = DataStatus.PENDING
    })
    builder.addCase(loadSuggestedPodcasts.fulfilled, (state, action) => {
      state.suggestedPodcasts = action.payload.results
      state.suggestedPodcastsDataStatus = DataStatus.FULFILLED
    })
    builder.addCase(loadSuggestedPodcasts.rejected, (state) => {
      state.suggestedPodcastsDataStatus = DataStatus.REJECTED
    })
    builder.addCase(loadRecentlyPlayedEpisodes.pending, (state) => {
      state.recentlyPlayedEpisodesDataStatus = DataStatus.PENDING
    })
    builder.addCase(loadRecentlyPlayedEpisodes.fulfilled, (state, action) => {
      state.recentlyPlayedEpisodes = action.payload
      state.recentlyPlayedEpisodesDataStatus = DataStatus.FULFILLED
    })
    builder.addCase(loadRecentlyPlayedEpisodes.rejected, (state) => {
      state.recentlyPlayedEpisodesDataStatus = DataStatus.REJECTED
    })
    builder.addCase(addToRecentlyPlayed.fulfilled, (state, action) => {
      state.recentlyPlayedEpisodes = action.payload
    })
    builder.addCase(loadPopularEpisodes.pending, (state) => {
      state.popularEpisodesDataStatus = DataStatus.PENDING
    })
    builder.addCase(loadPopularEpisodes.fulfilled, (state, action) => {
      state.popularEpisodes = action.payload.slice(
        FIRST_ARRAY_IDX,
        POPULAR_EPISODES_COUNT
      )
      state.popularEpisodesDataStatus = DataStatus.FULFILLED
    })
    builder.addCase(loadPopularEpisodes.rejected, (state) => {
      state.popularEpisodesDataStatus = DataStatus.REJECTED
    })
  }
})

const reducer = homeSlice.reducer

export { reducer }
