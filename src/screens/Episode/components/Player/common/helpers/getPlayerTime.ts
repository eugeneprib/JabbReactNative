import {
  TIME_SEPARATOR,
  HOUR_IS_NOT_EXISTS,
  MILLISECONDS_IN_SECOND
} from '../constants'

const getPlayerTime = (timestamp: number): string => {
  const time = new Date(timestamp * MILLISECONDS_IN_SECOND)
    .toISOString()
    .slice(-13, -5)

  const splittedTime = time.split(TIME_SEPARATOR)
  const [hours, minutes, seconds] = splittedTime

  let formattedTime = `${minutes}:${seconds}`

  if (hours !== HOUR_IS_NOT_EXISTS) {
    formattedTime = `${hours}:${formattedTime}`
  }

  return formattedTime
}

export { getPlayerTime }
