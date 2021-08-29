import * as dateFns from 'date-fns'
import { UNIX_TIME_START } from '../common'
import { DateFormatType, getFormattedDate } from 'src/helpers'

const checkHourExist = (hours: string): boolean => {
  return hours === '00' ? false : true
}

const getTime = (secondsAsNumber: number): string => {
  const timeInFormatHHmmss = getFormattedDate(
    String(dateFns.addSeconds(new Date(UNIX_TIME_START), secondsAsNumber)),
    DateFormatType.HOURS_MINUTES_SECONDS
  )

  const splittedTime = timeInFormatHHmmss.split(':')
  const hours = splittedTime[0]
  const minutes = splittedTime[1]
  const seconds = splittedTime[2]

  const isHourExist = checkHourExist(hours)
  let time = minutes + ':' + seconds
  if (isHourExist) {
    time = hours + ':' + minutes + ':' + seconds
  }

  return time
}

export { getTime }
