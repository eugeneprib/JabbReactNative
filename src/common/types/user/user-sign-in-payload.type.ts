import { UserPayloadKey } from 'src/common/enums'
import { UserPayload } from './user-payload.type'

type UserSignInPayload = UserPayload & {
  [UserPayloadKey.PASSWORD]: string
}

export type { UserSignInPayload }
