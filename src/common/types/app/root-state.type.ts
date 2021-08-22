import { store } from 'src/store'

type rootState = ReturnType<typeof store.getState>

export type { rootState }
