import { DEFAULT_START_TIME, TIME_SHIFT_IN_SECONDS } from '../constants'

const getBackwardTime = (position: number): number => {
  const delta = position - TIME_SHIFT_IN_SECONDS

  if (delta < DEFAULT_START_TIME) {
    return DEFAULT_START_TIME
  }

  return delta
}

export { getBackwardTime }
