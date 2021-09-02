import { ApiPath, HttpMethod } from 'src/common/enums'
import { EpisodesApiPath } from './common/enums'
import { Http } from 'src/services/http'
import {
  Episode,
  EpisodeQueryPayload,
  LoadEpisodesByPodcastIdPayload
} from 'src/common/types'

type Constructor = {
  http: Http
  apiPath: string
}

class EpisodeApi {
  #http: Http
  #apiPath: string

  constructor({ http, apiPath }: Constructor) {
    this.#http = http
    this.#apiPath = apiPath
  }

  public getAll(): Promise<Episode[]> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.EPISODES}${EpisodesApiPath.ROOT}`,
      {
        method: HttpMethod.GET
      }
    )
  }

  public getById(id: number): Promise<Episode> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.EPISODES}${EpisodesApiPath.ROOT}${id}`,
      {
        method: HttpMethod.GET
      }
    )
  }

  public getByQueryByPodcastId({
    podcastId,
    filter
  }: LoadEpisodesByPodcastIdPayload): Promise<EpisodeQueryPayload> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.EPISODES}${
        EpisodesApiPath.PODCAST
      }/${podcastId}`,
      {
        method: HttpMethod.GET,
        query: filter
      }
    )
  }
}

export { EpisodeApi }
