import { Image, User, Genre } from 'src/common/types'
import { PodcastPeriodicity, PodcastType } from 'src/common/enums'

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
  type: PodcastType
  genreId: number | null
  user: User
  genre: Genre | null
  periodicity: PodcastPeriodicity
}

export default Podcast
