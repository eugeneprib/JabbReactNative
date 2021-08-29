import { Episode } from 'src/common/types'
import {
  DEFAULT_EPISODE_TRACK,
  DEFAULT_EPISODE_IMAGE,
  FormattedEpisodeData
} from '../common'

const dataChanger = (episode: Episode): FormattedEpisodeData => {
  return Object.assign(
    {},
    {
      id: String(episode.id),
      url: episode.record ? episode.record.fileUrl : DEFAULT_EPISODE_TRACK,
      title: episode.name,
      artist: episode.description,
      artwork: episode.image ? episode.image.url : DEFAULT_EPISODE_IMAGE
    }
  )
}

export { dataChanger }
