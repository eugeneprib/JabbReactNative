import * as Keychain from 'react-native-keychain'

type Constructor = {
  storage: typeof Keychain
}

class Storage {
  #storage: typeof Keychain
  constructor({ storage }: Constructor) {
    this.#storage = storage
  }

  public async getItem(): Promise<boolean | Keychain.Result> {
    return await this.#storage.getGenericPassword()
  }

  public async setItem(
    key: string,
    value: string
  ): Promise<boolean | Keychain.Result> {
    return await this.#storage.setGenericPassword(key, value)
  }

  public async removeItem(): Promise<boolean | Keychain.Result> {
    return await this.#storage.resetGenericPassword()
  }
}

export { Storage }
