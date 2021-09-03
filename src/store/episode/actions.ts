import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { StorageKey } from 'src/common/enums'
import {
  AsyncThunkConfig,
  Episode,
  RecentlyPlayedEpisode
} from 'src/common/types'
import { ActionType } from './common'

const loadEpisodePayload = createAsyncThunk<Episode, number, AsyncThunkConfig>(
  ActionType.LOAD_EPISODE,
  async (id, { extra }) => {
    const { episodeApi } = extra
    const episode = await episodeApi.getById(id)

    return episode
  }
)

const addToRecentlyPlayed = createAsyncThunk<
  RecentlyPlayedEpisode[],
  RecentlyPlayedEpisode,
  AsyncThunkConfig
>(ActionType.ADD_TO_RECENTLY_PLAYED, async (episode, { extra }) => {
  const { storageService } = extra

  const episodesAsJson = await storageService.getItem(
    StorageKey.RECENTLY_PLAYED_EPISODES
  )

  const episodes = (
    episodesAsJson ? JSON.parse(episodesAsJson) : []
  ) as RecentlyPlayedEpisode[]

  const episodesWithoutCurrentItem = episodes.filter(
    (item) => item.id !== episode.id
  )

  const episodesWithCurrentItem = [episode, ...episodesWithoutCurrentItem]
  const episodesWithCurrentItemAsJson = JSON.stringify(episodesWithCurrentItem)

  await storageService.setItem(
    StorageKey.RECENTLY_PLAYED_EPISODES,
    episodesWithCurrentItemAsJson
  )

  return episodesWithCurrentItem
})

const resetState = createAction(ActionType.RESET_STATE)

export { loadEpisodePayload, addToRecentlyPlayed, resetState }
