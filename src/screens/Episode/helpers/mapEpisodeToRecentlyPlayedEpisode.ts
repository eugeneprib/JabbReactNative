import { Episode, RecentlyPlayedEpisode } from 'src/common/types'
import { DEFAULT_IMAGE_BASE64 } from 'src/common/constants'

const mapEpisodeToRecentlyPlayedEpisode = (
  episode: Episode,
  author?: string,
  podcast?: string,
  position?: number
): RecentlyPlayedEpisode => {
  return {
    author,
    podcast,
    position,
    id: episode.id,
    title: episode.name,
    date: episode.createdAt,
    source: episode.image?.url ?? DEFAULT_IMAGE_BASE64
  }
}

export { mapEpisodeToRecentlyPlayedEpisode }
