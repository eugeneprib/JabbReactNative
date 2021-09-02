import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AsyncThunkConfig, Episode } from 'src/common/types'
import { ActionType } from './common'

const loadEpisodePayload = createAsyncThunk<Episode, number, AsyncThunkConfig>(
  ActionType.LOAD_EPISODE,
  async (id, { extra }) => {
    const { episodeApi } = extra
    const episode = await episodeApi.getById(id)

    return episode
  }
)

const resetState = createAction(ActionType.RESET_STATE)

export { loadEpisodePayload, resetState }
