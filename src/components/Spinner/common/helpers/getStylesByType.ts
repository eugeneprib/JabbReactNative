import { BASE_APP_COLOUR, SECONDARY_APP_COLOUR } from '../constants'
import { SpinnerType } from '../enum'

const getStylesByType = (type: SpinnerType): string => {
  switch (type) {
    case SpinnerType.PRIMARY: {
      return BASE_APP_COLOUR
    }
    case SpinnerType.SECONDARY: {
      return SECONDARY_APP_COLOUR
    }
  }
}

export { getStylesByType }
