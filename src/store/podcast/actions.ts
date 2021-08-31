import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  Podcast,
  AsyncThunkConfig,
  EpisodeQueryPayload,
  LoadEpisodesByPodcastIdPayload
} from 'src/common/types'
import { ActionType } from './common'

const loadPodcast = createAsyncThunk<Podcast, number, AsyncThunkConfig>(
  ActionType.LOAD_PODCAST,
  async (id, { extra }) => {
    const { podcastApi } = extra
    const podcast = await podcastApi.getById(id)

    return podcast
  }
)

const loadEpisodesByPodcastId = createAsyncThunk<
  EpisodeQueryPayload,
  LoadEpisodesByPodcastIdPayload,
  AsyncThunkConfig
>(
  ActionType.LOAD_PODCAST_EPISODES,
  async (loadEpisodesByPodcastIdPayload, { extra }) => {
    const { episodeApi } = extra
    const result = await episodeApi.getByQueryByPodcastId(
      loadEpisodesByPodcastIdPayload
    )

    return result
  }
)

export { loadPodcast, loadEpisodesByPodcastId }
