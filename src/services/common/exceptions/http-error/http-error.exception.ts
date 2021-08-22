import { httpCode } from 'src/services/common'
import { DEFAULT_MESSAGE } from './common/constants'
import { customExceptionName } from './common/custom-exception-name.enum'

class httpError extends Error {
  status: httpCode

  constructor({
    status = httpCode.INTERNAL_SERVER_ERROR,
    message = DEFAULT_MESSAGE
  } = {}) {
    super(message)
    this.status = status
    this.name = customExceptionName.HTTP_ERROR
  }
}

export { httpError }
