import { ApiPath, HttpMethod, UsersApiPath } from 'src/services/common'
import { User } from 'src/common/types'
import { Http } from 'src/services/http'

type Constructor = {
  http: Http
  apiPath: string
}

class UserApi {
  #http: Http
  #apiPath: string

  constructor({ http, apiPath }: Constructor) {
    this.#http = http
    this.#apiPath = apiPath
  }

  public getById(id: number): Promise<User> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.USERS}${UsersApiPath.ROOT}${id}`,
      {
        method: HttpMethod.GET
      }
    )
  }
}

export { UserApi }
