import * as dateFns from 'date-fns'
import { UNIX_TIME_START, TIME_SEPARATOR } from '../common'
import { DateFormatType, getFormattedDate } from 'src/helpers'

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

  const isHourExist = checkHourExist(hours)
  let time = minutes + TIME_SEPARATOR + seconds
  if (isHourExist) {
    time = hours + TIME_SEPARATOR + minutes + TIME_SEPARATOR + seconds
  }

  return time
}

export { getTime }
