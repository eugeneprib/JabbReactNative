import { Episode } from 'src/common/types'
import { PlayerEpisode } from 'src/common/types/player'
import {
  DEFAULT_EPISODE_TRACK,
  DEFAULT_EPISODE_IMAGE
} from '../common/constants'

const mapEpisodeToPlayerEpisode = (episode: Episode): PlayerEpisode => {
  return {
    id: String(episode.id),
    url: episode.record?.fileUrl ?? DEFAULT_EPISODE_TRACK,
    title: episode.name,
    artist: episode.description,
    artwork: episode.image?.url ?? DEFAULT_EPISODE_IMAGE
  }
}

export { mapEpisodeToPlayerEpisode }
