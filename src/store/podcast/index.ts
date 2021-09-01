import { createSlice } from '@reduxjs/toolkit'
import { DataStatus } from 'src/common/enums'
import { Episode, Podcast } from 'src/common/types'
import { loadPodcast, loadEpisodesByPodcastId } from './actions'

type State = {
  dataStatus: DataStatus
  podcast: Podcast | null
  episodes: Episode[]
  episodesDataStatus: DataStatus
  totalCount: number
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  podcast: null,
  episodes: [],
  episodesDataStatus: DataStatus.IDLE,
  totalCount: 0
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
      state.episodes = action.payload.results
      state.totalCount = action.payload.totalCount
    })
    builder.addCase(loadEpisodesByPodcastId.rejected, (state) => {
      state.episodesDataStatus = DataStatus.REJECTED
    })
  }
})

const reducer = podcastSlice.reducer

export { reducer }