import { createAsyncThunk } from '@reduxjs/toolkit'
import { StorageKey } from 'src/common/enums'
import {
  AsyncThunkConfig,
  SuggestedPodcast,
  RecentlyPlayedEpisode,
  PopularEpisode
} from 'src/common/types'
import { ActionType } from './common'

const loadSuggestedPodcasts = createAsyncThunk<
  SuggestedPodcast[],
  undefined,
  AsyncThunkConfig
>(ActionType.LOAD_PODCASTS, async (_args, { extra }) => {
  const { podcastApi } = extra
  const payload = await podcastApi.getPopular()
  return payload
})

const loadRecentlyPlayedEpisodes = createAsyncThunk<
  RecentlyPlayedEpisode[],
  undefined,
  AsyncThunkConfig
>(ActionType.LOAD_RECENTLY_PLAYED_EPISODES, async (_args, { extra }) => {
  const { storageService } = extra

  const episodesAsJson = await storageService.getItem(
    StorageKey.RECENTLY_PLAYED_EPISODES
  )

  return episodesAsJson ? JSON.parse(episodesAsJson) : []
})

const loadPopularEpisodes = createAsyncThunk<
  PopularEpisode[],
  undefined,
  AsyncThunkConfig
>(ActionType.LOAD_POPULAR, async (_args, { extra }) => {
  const { episodeApi } = extra
  const episodes = await episodeApi.getPopular()

  return episodes
})

export {
  loadSuggestedPodcasts,
  loadRecentlyPlayedEpisodes,
  loadPopularEpisodes
}
