import {
  TIME_SEPARATOR,
  HOUR_IS_NOT_EXISTS,
  MILLISECONDS_IN_SECOND,
  STRING_ZERO_SYMBOL
} from '../constants'

const checkHourExist = (hours: string | number): boolean => {
  return hours !== HOUR_IS_NOT_EXISTS
}

const checkZeroExist = (i: number) => {
  return i < 10 ? STRING_ZERO_SYMBOL + i : i
}

const getPlayerTime = (timestamp: number): string => {
  const time = new Date(timestamp * MILLISECONDS_IN_SECOND)
  const hours = checkZeroExist(time.getHours())
  const minutes = checkZeroExist(time.getMinutes())
  const seconds = checkZeroExist(time.getSeconds())

  const minutesAndSeconds = minutes + TIME_SEPARATOR + seconds

  if (!checkHourExist(hours)) {
    return minutesAndSeconds
  }

  return hours + TIME_SEPARATOR + minutesAndSeconds
}

export { getPlayerTime }
