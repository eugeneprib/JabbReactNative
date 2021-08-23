import { HttpMethod } from 'src/services/common'
import { UserSignInPayload, SignResponse, User } from 'src/common/types'
import { Http } from 'src/services/http'
import { ApiPath, AuthApiPath, ContentType } from 'src/services/common'

type Constructor = {
  http: Http
  apiPrefix: string
}

class AuthApi {
  #http: Http
  #apiPrefix: string

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http
    this.#apiPrefix = apiPrefix
  }

  public signIn(payload: UserSignInPayload): Promise<SignResponse> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.AUTH}${AuthApiPath.SIGN_IN}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
        hasAuth: false
      }
    )
  }

  public getCurrentUser(): Promise<User> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.AUTH}${AuthApiPath.CURRENT_USER}`,
      {
        method: HttpMethod.GET
      }
    )
  }
}

export { AuthApi }
