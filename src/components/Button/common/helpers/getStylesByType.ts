import { ButtonType } from '../enum'
import { Styles } from '../types'

const getStylesByType = (type: ButtonType): Styles => {
  switch (type) {
    case ButtonType.PRIMARY: {
      return {
        touchable: {
          backgroundColor: '#1E1E1E'
        },
        text: {
          color: 'white'
        }
      }
    }
    case ButtonType.SECONDARY: {
      return {
        touchable: {
          borderColor: '#f3427f',
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
