import { BASE_APP_COLOUR, SECONDARY_APP_COLOUR } from 'src/common/constants'
import { ButtonType } from '../enum'
import { Styles } from '../types'

const getStylesByType = (type: ButtonType): Styles => {
  switch (type) {
    case ButtonType.PRIMARY: {
      return {
        touchable: {
          backgroundColor: BASE_APP_COLOUR
        },
        text: {
          color: 'white'
        }
      }
    }
    case ButtonType.SECONDARY: {
      return {
        touchable: {
          borderColor: SECONDARY_APP_COLOUR,
          borderWidth: 2
        },
        text: {
          color: 'black'
        }
      }
    }
  }
}

export { getStylesByType }
