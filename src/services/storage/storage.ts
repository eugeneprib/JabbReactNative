import EncryptedStorage from 'react-native-encrypted-storage'

type Constructor = {
  storage: typeof EncryptedStorage
}

class Storage {
  #storage: typeof EncryptedStorage

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
