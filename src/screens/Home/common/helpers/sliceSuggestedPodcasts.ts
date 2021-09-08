import { FIRST_ARRAY_IDX } from 'src/common/constants'
import { SuggestedPodcast } from 'src/common/types'
import { MAX_SUGGESTED_PODCASTS } from '../constants'

const sliceSuggestedPodcasts = (
  podcasts: SuggestedPodcast[]
): SuggestedPodcast[] => {
  return podcasts.slice(FIRST_ARRAY_IDX, MAX_SUGGESTED_PODCASTS)
}

export { sliceSuggestedPodcasts }
