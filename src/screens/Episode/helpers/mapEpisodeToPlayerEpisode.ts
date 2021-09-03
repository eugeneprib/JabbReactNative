import { Episode, PlayerEpisode } from 'src/common/types'
import {
  DEFAULT_EPISODE_TRACK,
  DEFAULT_EPISODE_IMAGE
} from '../common/constants'

const mapEpisodeToPlayerEpisode = (
  episode: Episode,
  author: string
): PlayerEpisode => {
  return {
    id: String(episode.id),
    url: episode.record?.fileUrl ?? DEFAULT_EPISODE_TRACK,
    title: episode.name,
    artist: author,
    artwork: episode.image?.url ?? DEFAULT_EPISODE_IMAGE
  }
}

export { mapEpisodeToPlayerEpisode }
