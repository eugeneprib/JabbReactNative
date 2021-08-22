import { imageCreatePayloadKey } from 'src/common/enums'

type imageCreatePayload = {
  [imageCreatePayloadKey.URL]: string
  [imageCreatePayloadKey.PUBLIC_ID]: string
}

export type { imageCreatePayload }
