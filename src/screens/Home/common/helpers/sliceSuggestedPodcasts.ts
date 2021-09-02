import { FIRST_ARRAY_IDX } from 'src/common/constants'
import { Podcast } from 'src/common/types'
import { MAX_SUGGESTED_PODCASTS } from '../constants'

const sliceSuggestedPodcasts = (podcasts: Podcast[]): Podcast[] => {
  return podcasts.slice(FIRST_ARRAY_IDX, MAX_SUGGESTED_PODCASTS)
}

export { sliceSuggestedPodcasts }
