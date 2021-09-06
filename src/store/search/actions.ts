import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  AsyncThunkConfig,
  PodcastLoadFilter,
  PodcastQueryPayload
} from 'src/common/types'
import { ActionType } from './common'

const loadPodcasts = createAsyncThunk<
  PodcastQueryPayload,
  PodcastLoadFilter | undefined,
  AsyncThunkConfig
>(ActionType.LOAD_PODCASTS, async (filter, { extra }) => {
  const { podcastApi } = extra
  const podcasts = await podcastApi.getByQuery(filter)

  return podcasts
})

const loadMorePodcasts = createAsyncThunk<
  PodcastQueryPayload,
  PodcastLoadFilter,
  AsyncThunkConfig
>(ActionType.LOAD_MORE_PODCASTS, async (filter, { extra }) => {
  const { podcastApi } = extra
  const podcasts = await podcastApi.getByQuery(filter)

  return podcasts
})
export { loadPodcasts, loadMorePodcasts }
