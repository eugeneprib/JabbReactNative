import { UserPayloadKey } from 'src/common/enums'
import { UserConfigurePayload } from './user-configure-payload.type'

type UserCreatePayload = UserConfigurePayload & {
  [UserPayloadKey.PASSWORD]: string
}

export type { UserCreatePayload }
