import { createAsyncThunk } from '@reduxjs/toolkit'
import { Podcast, AsyncThunkConfig } from 'src/common/types'
import { ActionType } from './common'

const loadPodcasts = createAsyncThunk<Podcast[], number, AsyncThunkConfig>(
  ActionType.LOAD_PODCASTS,
  async (id, { extra }) => {
    const { podcastApi } = extra
    const podcasts = await podcastApi.getAllByUserId(id)

    return podcasts
  }
)

export { loadPodcasts }
