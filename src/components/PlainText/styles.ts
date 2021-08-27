import { StyleSheet, TextStyle } from 'react-native'
import fonts from 'src/styles/fonts'

type Styles = {
  text: TextStyle
}

const styles: Styles = StyleSheet.create({
  text: {
    fontFamily: fonts.MainMedium
  }
})

export default styles
