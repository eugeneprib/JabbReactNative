import { ButtonType } from '../enum'
import { Styles } from '../types'

const getStylesByType = (type: ButtonType): Styles => {
  switch (type) {
    case ButtonType.PRIMARY: {
      return {
        touchable: {
          backgroundColor: '#f3427f'
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
