import { createSlice } from '@reduxjs/toolkit'
import { DataStatus } from 'src/common/enums'
import { Episode, Podcast } from 'src/common/types'
import { loadPodcast, loadEpisodesByPodcastId, resetState } from './actions'

type State = {
  dataStatus: DataStatus
  podcast: Podcast | null
  episodes: Episode[]
  episodesDataStatus: DataStatus
  totalCount: number
  hasMoreEpisodes: boolean
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  podcast: null,
  episodes: [],
  episodesDataStatus: DataStatus.IDLE,
  totalCount: 0,
  hasMoreEpisodes: true
}

const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPodcast.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadPodcast.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.podcast = action.payload
    })
    builder.addCase(loadPodcast.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })

    builder.addCase(loadEpisodesByPodcastId.pending, (state) => {
      state.episodesDataStatus = DataStatus.PENDING
    })
    builder.addCase(loadEpisodesByPodcastId.fulfilled, (state, action) => {
      state.episodesDataStatus = DataStatus.FULFILLED
      state.episodes = state.episodes.concat(action.payload.results)
      state.totalCount = action.payload.totalCount

      if (
        state.episodes.length === state.totalCount ||
        state.episodes.length > state.totalCount
      ) {
        state.hasMoreEpisodes = false
      }
    })
    builder.addCase(loadEpisodesByPodcastId.rejected, (state) => {
      state.episodesDataStatus = DataStatus.REJECTED
    })
    builder.addCase(resetState, (state) => {
      Object.assign(state, initialState)
    })
  }
})

const reducer = podcastSlice.reducer

export { reducer }
