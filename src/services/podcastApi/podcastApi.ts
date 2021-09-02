import { ApiPath, PodcastsApiPath, HttpMethod } from '../common/enums'
import { Podcast } from 'src/common/types'
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

  public getById(id: number): Promise<Podcast> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.PODCASTS}${PodcastsApiPath.ROOT}${id}`,
      {
        method: HttpMethod.GET
      }
    )
  }
}

export { PodcastApi }
