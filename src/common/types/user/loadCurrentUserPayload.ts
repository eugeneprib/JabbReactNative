import { User } from 'src/common/types'

type LoadCurrentUserPayload = {
  token: string | null
  currentUser: User | null
}

export type { LoadCurrentUserPayload }
