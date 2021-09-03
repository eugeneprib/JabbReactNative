import { Episode, RecentlyPlayedEpisode } from 'src/common/types'
import { DEFAULT_EPISODE_IMAGE } from '../common/constants'

const mapEpisodeToRecentlyPlayedEpisode = (
  episode: Episode,
  author: string
): RecentlyPlayedEpisode => {
  return {
    author,
    id: episode.id,
    title: episode.name,
    date: episode.createdAt,
    source: episode.image?.url ?? DEFAULT_EPISODE_IMAGE
  }
}

export { mapEpisodeToRecentlyPlayedEpisode }
