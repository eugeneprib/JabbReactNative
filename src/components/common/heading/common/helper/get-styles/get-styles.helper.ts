import { StyleProp, TextStyle } from 'react-native'
import { HeadingType } from 'src/common/enums/enums'

const getStyles = (type: HeadingType): StyleProp<TextStyle> => {
  switch (type) {
    case HeadingType.SMALL: {
      return {
        fontWeight: 'bold',
        fontSize: 2
      }
    }
    case HeadingType.MEDIUM: {
      return {
        fontWeight: 'bold',
        fontSize: 28
      }
    }
    case HeadingType.LARGE: {
      return {
        fontWeight: 'bold',
        fontSize: 34
      }
    }
    case HeadingType.HUGE: {
      return { fontWeight: 'bold', fontSize: 40 }
    }
  }
}

export { getStyles }
