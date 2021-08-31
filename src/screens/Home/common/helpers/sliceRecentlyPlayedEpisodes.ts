import { FIRST_ARRAY_IDX } from 'src/common/constants'
import { RecentlyPlayedEpisode } from 'src/common/types'
import { MAX_RECENTLY_PLAYED_EPISODES } from '../constants'

const sliceRecentlyPlayedEpisodes = (
  episodes: RecentlyPlayedEpisode[]
): RecentlyPlayedEpisode[] => {
  return episodes.slice(FIRST_ARRAY_IDX, MAX_RECENTLY_PLAYED_EPISODES)
}

export { sliceRecentlyPlayedEpisodes }
