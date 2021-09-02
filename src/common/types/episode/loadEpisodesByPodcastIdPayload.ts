import { EpisodeLoadFilter } from './episodeLoadFilter'

type LoadEpisodesByPodcastIdPayload = {
  podcastId: number
  filter: EpisodeLoadFilter
}

export type { LoadEpisodesByPodcastIdPayload }
