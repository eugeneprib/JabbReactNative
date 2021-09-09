import { Episode, Podcast } from 'src/common/types'

type SuggestedPodcast = Podcast & { episodes: Episode[] }

export type { SuggestedPodcast }
