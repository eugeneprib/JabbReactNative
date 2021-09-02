import { ApiPath, HttpMethod } from 'src/services/common'
import { Podcast } from 'src/common/types'
import { PodcastsApiPath } from 'src/common/enums'
import { Http } from 'src/services/http'

type Constructor = {
  http: Http
  apiPath: string
}

class PodcastApi {
  #http: Http
  #apiPath: string

  constructor({ http, apiPath }: Constructor) {
    this.#http = http
    this.#apiPath = apiPath
  }

  public getAllByUserId(userId: number): Promise<Podcast[]> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.PODCASTS}${PodcastsApiPath.USERS}/${userId}`,
      {
        method: HttpMethod.GET
      }
    )
  }
}

export { PodcastApi }
