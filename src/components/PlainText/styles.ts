import { StyleSheet, TextStyle } from 'react-native'
import fonts from 'src/styles/fonts'

type Styles = {
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  text: {
    fontFamily: fonts.MainMedium
  }
})

export default styles
