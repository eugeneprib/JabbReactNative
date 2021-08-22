import {
  getStringifiedQuery,
  httpError,
  httpHeader,
  httpMethod,
  httpOptions
} from 'src/services/common'
import { getHeadersProps } from './common/types/types'
import { storage as storageService } from 'src/services'

type Constructor = {
  storage: typeof storageService
}

class Http {
  #storage: typeof storageService

  constructor({ storage }: Constructor) {
    this.#storage = storage
  }

  load<T = unknown>(
    url: string,
    options: Partial<httpOptions> = {}
  ): Promise<T> {
    const {
      method = httpMethod.GET,
      payload = null,
      contentType,
      hasAuth = true,
      query
    } = options
    const headers = this.getHeaders({
      contentType,
      hasAuth
    })

    return fetch(this.getUrl(url, query), {
      method,
      headers,
      body: payload
    })
      .then(this.checkStatus)
      .then((res) => this.parseJSON<T>(res))
      .catch(this.throwError)
  }

  private getUrl(url: string, query?: Record<string, string | number>): string {
    return `${url}${query ? `?${getStringifiedQuery(query)}` : ''}`
  }

  private getHeaders({ contentType, hasAuth }: getHeadersProps): Headers {
    const headers = new Headers()

    if (contentType) {
      headers.append(httpHeader.CONTENT_TYPE, contentType)
    }

    if (hasAuth) {
      const token = this.#storage.getItem()

      headers.append(httpHeader.AUTHORIZATION, `Bearer ${token}`)
    }

    return headers
  }

  private async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const parsedException = await response.json().catch(() => ({
        message: response.statusText
      }))

      throw new httpError({
        status: response.status,
        message: parsedException?.message
      })
    }
    return response
  }

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json()
  }

  private throwError(err: Error): never {
    throw err
  }
}

export { Http }
