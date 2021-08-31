import { Middleware } from '@reduxjs/toolkit'
import { notification } from 'src/services'

const handleError: Middleware =
  () =>
  (next) =>
  (action): void => {
    const hasErrorMessage = Boolean(action?.error?.message)

    if (hasErrorMessage) {
      notification.error('Error', action.error.message)
    }

    next(action)
  }

export default handleError
