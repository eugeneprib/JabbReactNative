import { ApiPath, HttpMethod } from 'src/common/enums'
import { Episode } from 'src/common/types'
import { Http } from 'src/services/http'
import { EpisodeApiPath } from './common/enums'

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

  public getById(id: number): Promise<Episode> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.EPISODES}${EpisodeApiPath.ROOT}${id}`,
      {
        method: HttpMethod.GET
      }
    )
  }
}

export { EpisodeApi }
