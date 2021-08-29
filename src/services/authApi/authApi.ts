import { HttpMethod } from 'src/services/common'
import { UserSignInPayload, SignResponse, User } from 'src/common/types'
import { Http } from 'src/services/http'
import { ApiPath, AuthApiPath, ContentType } from 'src/services/common'

type Constructor = {
  http: Http
  apiPath: string
}

class AuthApi {
  #http: Http
  #apiPath: string

  constructor({ http, apiPath }: Constructor) {
    this.#http = http
    this.#apiPath = apiPath
  }

  public signIn(payload: UserSignInPayload): Promise<SignResponse> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.AUTH}${AuthApiPath.SIGN_IN}`,
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
      `${this.#apiPath}${ApiPath.AUTH}${AuthApiPath.CURRENT_USER}`,
      {
        method: HttpMethod.GET
      }
    )
  }
}

export { AuthApi }
