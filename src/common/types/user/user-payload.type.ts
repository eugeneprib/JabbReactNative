import { UserPayloadKey } from 'src/common/enums'

type UserPayload = {
  [UserPayloadKey.EMAIL]: string
}

export type { UserPayload }
