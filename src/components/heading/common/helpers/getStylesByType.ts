import { HeadingType } from '../enums'
import { Styles } from '../types'

const getStylesByType = (type: HeadingType): Styles => {
  switch (type) {
    case HeadingType.SMALL: {
      return {
        text: {
          fontSize: 22
        }
      }
    }
    case HeadingType.MEDIUM: {
      return {
        text: {
          fontSize: 28
        }
      }
    }
    case HeadingType.LARGE: {
      return {
        text: {
          fontSize: 34
        }
      }
    }
    case HeadingType.HUGE: {
      return {
        text: {
          fontSize: 40
        }
      }
    }
  }
}

export { getStylesByType }
