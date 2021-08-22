import { userPayloadKey } from 'src/common/enums'

type userPayload = {
  [userPayloadKey.EMAIL]: string
}

export type { userPayload }
