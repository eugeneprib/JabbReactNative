import {
  apiPath,
  contentType,
  httpMethod,
  usersApiPath
} from 'src/services/common'
import { user } from 'src/common/types'
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

  public getById(id: number): Promise<user> {
    return this.#http.load(
      `${this.#apiPrefix}${apiPath.USERS}${usersApiPath.ROOT}${id}`,
      {
        method: httpMethod.GET
      }
    )
  }
}

export { UserApi }
