import * as dateFns from 'date-fns'
import { DateFormatType, getFormattedDate } from 'src/helpers'

const getTime = (amntOfSeconds: number): string => {
  const HHmmss = getFormattedDate(
    String(dateFns.addSeconds(new Date(0), amntOfSeconds)),
    DateFormatType.HOURS_MINUTES_SECONDS
  )
  const splittedTime = HHmmss.split(':')
  let time = splittedTime[0] + ':' + splittedTime[1] + ':' + splittedTime[2]
  if (splittedTime[0] === '00') {
    time = splittedTime[1] + ':' + splittedTime[2]
  }
  return time
}

export { getTime }
