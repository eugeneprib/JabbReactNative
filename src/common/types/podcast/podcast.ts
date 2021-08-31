import { Image } from '../image'
import { User } from '../user'
import { Genre } from '../genre'

type Podcast = {
  id: number
  name: string
  userId: number
  imageId: number | null
  image: Image | null
  coverId: number | null
  cover: Image | null
  createdAt: string
  updatedAt: string
  description: string
  type: 'public' | 'private' | 'unlisted'
  genreId: number | null
  user: User
  genre: Genre | null
  periodicity: 'weekly' | 'daily' | 'monthly'
}

export type { Podcast }
