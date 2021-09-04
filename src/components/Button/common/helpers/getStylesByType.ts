import { AppColor } from 'src/common/enums'
import { ButtonType } from '../enum'
import { Styles } from '../types'

const getStylesByType = (type: ButtonType): Styles => {
  switch (type) {
    case ButtonType.PRIMARY: {
      return {
        touchable: {
          backgroundColor: AppColor.PRIMARY
        },
        text: {
          color: 'white'
        }
      }
    }
    case ButtonType.SECONDARY: {
      return {
        touchable: {
          borderColor: AppColor.SECONDARY,
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
