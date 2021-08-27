import { extraArgument } from 'src/store'
import { AppDispatch } from './appDispatch'
import { RootState } from './rootState'

type AsyncThunkConfig = {
  state: RootState
  dispatch: AppDispatch
  extra: typeof extraArgument
}

export type { AsyncThunkConfig }
