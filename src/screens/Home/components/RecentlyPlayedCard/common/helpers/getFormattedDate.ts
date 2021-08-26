import { format } from 'date-fns'

const getFormattedDate = (date: string): string => {
  const parsedDate = new Date(date)
  return format(parsedDate, 'MMM d, HH:mm')
}

export { getFormattedDate }
