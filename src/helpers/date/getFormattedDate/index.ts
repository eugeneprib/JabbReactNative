import { format } from 'date-fns'
import { DateFormatType } from './enums'

const getFormattedDate = (date: string, type: DateFormatType): string => {
  const parsedDate = new Date(date)
  return format(parsedDate, type)
}

export { getFormattedDate, DateFormatType }
