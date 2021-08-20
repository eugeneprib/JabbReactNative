import { ButtonColor } from './button-color.enum'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  buttonSecondary: {
    borderColor: ButtonColor.PINK,
    borderWidth: 2,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  textSecondary: {
    color: 'black'
  },
  buttonPrimary: {
    backgroundColor: ButtonColor.PINK,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  textPrimary: {
    color: 'white'
  }
})

export default styles
