import {
  ApiPath,
  HttpMethod,
  UsersApiPath
} from 'src/services/common'
import { User } from 'src/common/types'
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
}

export { UserApi }
