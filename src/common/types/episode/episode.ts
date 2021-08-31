import { Image } from '../image'
import { Record } from '../record'
import { Shownote } from '../shownote'

type Episode = {
  id: number
  name: string
  userId: number
  imageId: number | null
  image: Image | null
  record: Record | null
  status: 'published' | 'staging' | 'live'
  podcastId: number
  createdAt: string
  updatedAt: string
  type: 'public' | 'private' | 'unlisted'
  shownotes: Shownote[]
  description: string
}

export type { Episode }
