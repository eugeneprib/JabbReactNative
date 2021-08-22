import { image } from 'src/common/types'
import { userRole } from 'src/common/enums'

type user = {
  id: number
  firstName: string
  lastName: string
  imageId: number | null
  email: string
  nickname: string
  password: string
  birthdate: string
  bio: string
  createdAt: string
  updatedAt: string
  image: image | null
  role: userRole
}

export type { user }
