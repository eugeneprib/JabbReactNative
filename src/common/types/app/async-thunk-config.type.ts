import { extraArgument } from 'src/store'
import { appDispatch } from './app-dispatch.type'
import { rootState } from './root-state.type'

type asyncThunkConfig = {
  state: rootState
  dispatch: appDispatch
  extra: typeof extraArgument
}

export type { asyncThunkConfig }
