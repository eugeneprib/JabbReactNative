import { User } from 'src/common/types'

type SignResponse = {
  token: string
  user: User
}

export type { SignResponse }
