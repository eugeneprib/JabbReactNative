import { HttpCode } from 'src/services/common/enums/index'
import { DEFAULT_MESSAGE } from './common/constants'
import { CustomExceptionName } from './common/customExceptionName'

class HttpError extends Error {
  status: HttpCode

  constructor({
    status = HttpCode.INTERNAL_SERVER_ERROR,
    message = DEFAULT_MESSAGE
  } = {}) {
    super(message)
    this.status = status
    this.name = CustomExceptionName.HTTP_ERROR
  }
}

export { HttpError }
