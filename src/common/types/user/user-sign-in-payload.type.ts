import { userPayloadKey } from 'src/common/enums'
import { userPayload } from './user-payload.type'

type userSignInPayload = userPayload & {
  [userPayloadKey.PASSWORD]: string
}

export type { userSignInPayload }
