import { DateFormatType, getFormattedDate } from 'src/helpers'
import {
  TIME_SEPARATOR,
  HOUR_IS_NOT_EXISTS,
  MILLISECONDS_IN_SECOND
} from '../constants'

const checkHourExist = (hours: string): boolean => {
  return hours !== HOUR_IS_NOT_EXISTS
}

const getPlayerTime = (timestamp: number): string => {
  const formattedTime = getFormattedDate(
    String(new Date(timestamp * MILLISECONDS_IN_SECOND)),
    DateFormatType.HOURS_MINUTES_SECONDS
  )

  const splittedTime = formattedTime.split(TIME_SEPARATOR)
  const [hours, minutes, seconds] = splittedTime

  const minutesAndSeconds = minutes + TIME_SEPARATOR + seconds

  if (!checkHourExist(hours)) {
    return minutesAndSeconds
  }

  return hours + TIME_SEPARATOR + minutesAndSeconds
}

export { getPlayerTime }
