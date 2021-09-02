import { ApiPath, ContentType, HttpMethod } from 'src/common/enums'
import { SignResponse, User, UserSignInPayload } from 'src/common/types'
import { Http } from 'src/services/http'
import { AuthApiPath } from './common/enums'

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
