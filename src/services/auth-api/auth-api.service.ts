import { httpMethod } from 'src/services/common'
import { userSignInPayload, signResponse, user } from 'src/common/types'
import { Http } from 'src/services/http'
import { apiPath, authApiPath, contentType } from 'src/services/common'

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

  public signIn(payload: userSignInPayload): Promise<signResponse> {
    return this.#http.load(
      `${this.#apiPrefix}${apiPath.AUTH}${authApiPath.SIGN_IN}`,
      {
        method: httpMethod.POST,
        contentType: contentType.JSON,
        payload: JSON.stringify(payload),
        hasAuth: false
      }
    )
  }

  public getCurrentUser(): Promise<user> {
    return this.#http.load(
      `${this.#apiPrefix}${apiPath.AUTH}${authApiPath.CURRENT_USER}`,
      {
        method: httpMethod.GET
      }
    )
  }
}

export { AuthApi }
