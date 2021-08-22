import {
  ApiPath,
  ContentType,
  HttpMethod,
  UsersApiPath
} from 'src/common/enums'
import { User, UserEditPayload } from 'src/common/types'
import { Http } from 'src/services/http'

type Constructor = {
  http: Http
  apiPrefix: string
}

class UserApi {
  #http: Http
  #apiPrefix: string

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http
    this.#apiPrefix = apiPrefix
  }

  public getById(id: number): Promise<User> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.ROOT}${id}`,
      {
        method: HttpMethod.GET
      }
    )
  }

  public update(id: number, payload: UserEditPayload): Promise<User> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.ROOT}${id}`,
      {
        method: HttpMethod.PUT,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload)
      }
    )
  }
}

export { UserApi }
