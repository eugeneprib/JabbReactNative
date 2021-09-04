import { TIME_SHIFT_IN_SECONDS } from '../constants'

const getForwardTime = (position: number, duration: number): number => {
  const delta = position + TIME_SHIFT_IN_SECONDS

  if (delta > duration) {
    return duration
  }

  return delta
}

export { getForwardTime }
