import { ImageCreatePayloadKey } from 'src/common/enums'

type ImageCreatePayload = {
  [ImageCreatePayloadKey.URL]: string
  [ImageCreatePayloadKey.PUBLIC_ID]: string
}

export type { ImageCreatePayload }
