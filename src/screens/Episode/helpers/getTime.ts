import * as dateFns from 'date-fns'
import { DateFormatType, getFormattedDate } from 'src/helpers'
import { UNIX_TIME_START, TIME_SEPARATOR } from '../common'

const checkHourExist = (hours: string): boolean => {
  return hours !== '00'
}

const getTime = (timestamp: number): string => {
  const formattedTime = getFormattedDate(
    String(dateFns.addSeconds(new Date(UNIX_TIME_START), timestamp)),
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

export { getTime }
