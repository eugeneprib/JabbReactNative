import { ApiPath, HttpMethod } from 'src/common/enums'
import { PodcastLoadFilter, PodcastQueryPayload } from 'src/common/types'
import { Http } from 'src/services/http'
import { PodcastsApiPath } from './common/enums'

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

  public getByQuery(payload?: PodcastLoadFilter): Promise<PodcastQueryPayload> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.PODCASTS}${PodcastsApiPath.ROOT}`,
      {
        method: HttpMethod.GET,
        query: payload
      }
    )
  }
}

export { PodcastApi }
