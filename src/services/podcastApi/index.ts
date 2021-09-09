import { ApiPath, HttpMethod } from 'src/common/enums'
import {
  PodcastLoadFilter,
  PodcastQueryPayload,
  Podcast,
  SuggestedPodcast
} from 'src/common/types'
import { Http } from 'src/services/http'
import { PodcastsApiPath } from 'src/common/enums'

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

  public getPopular(): Promise<SuggestedPodcast[]> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.PODCASTS}${PodcastsApiPath.POPULAR}`,
      {
        method: HttpMethod.GET
      }
    )
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

  public getAllByUserId(userId: number): Promise<Podcast[]> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.PODCASTS}${PodcastsApiPath.USERS}/${userId}`,
      {
        method: HttpMethod.GET
      }
    )
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
