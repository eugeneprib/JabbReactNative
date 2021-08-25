import { store } from 'src/store'

type RootState = ReturnType<typeof store.getState>

export type { RootState }
