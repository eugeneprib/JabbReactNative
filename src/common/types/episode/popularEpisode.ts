import { Episode, User } from 'src/common/types'

type PopularEpisode = Episode & { user: User }

export type { PopularEpisode }
