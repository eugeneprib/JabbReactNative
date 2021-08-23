import { UserPayloadKey } from 'src/common/enums'

type UserSignInPayload = {
  [UserPayloadKey.EMAIL]: string
  [UserPayloadKey.PASSWORD]: string
}

export type { UserSignInPayload }
