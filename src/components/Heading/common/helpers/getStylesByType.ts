import { HeadingType } from '../enums'
import { Styles } from '../types'

const getStylesByType = (type: HeadingType): Styles => {
  switch (type) {
    case HeadingType.SMALL: {
      return {
        text: {
          fontSize: 14
        }
      }
    }
    case HeadingType.MEDIUM: {
      return {
        text: {
          fontSize: 22
        }
      }
    }
    case HeadingType.LARGE: {
      return {
        text: {
          fontSize: 24
        }
      }
    }
    case HeadingType.HUGE: {
      return {
        text: {
          fontSize: 34
        }
      }
    }
  }
}

export { getStylesByType }
