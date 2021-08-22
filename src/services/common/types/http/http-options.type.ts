import { contentType, httpMethod } from 'src/services/common/enums'

type httpOptions = {
  method: httpMethod
  contentType: contentType
  payload: BodyInit | null
  hasAuth: boolean
  query: Record<string, string | number>
}

export type { httpOptions }
