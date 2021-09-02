import { Storage as TStorage } from './common/types'

type Constructor = {
  storage: TStorage
}

class Storage {
  #storage: TStorage

  constructor({ storage }: Constructor) {
    this.#storage = storage
  }

  public getItem(key: string): Promise<string | null> {
    return this.#storage.getItem(key)
  }

  public setItem(key: string, value: string): Promise<void> {
    return this.#storage.setItem(key, value)
  }

  public removeItem(key: string): Promise<void> {
    return this.#storage.removeItem(key)
  }

  public clear(): Promise<void> {
    return this.#storage.clear()
  }
}

export { Storage }
