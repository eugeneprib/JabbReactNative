import { Image, Shownote, Record } from 'src/common/types'

type Episode = {
  id: number
  name: string
  userId: number
  imageId: number | null
  image: Image | null
  record: Record | null
  status: string
  podcastId: number
  createdAt: string
  updatedAt: string
  type: string
  shownotes: Shownote[]
  description: string
}

export type { Episode }
