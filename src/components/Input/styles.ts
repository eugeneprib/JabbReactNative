import { StyleSheet, TextStyle } from 'react-native'
import fonts from 'src/styles/fonts'

type Styles = {
  input: TextStyle
}

const styles = StyleSheet.create<Styles>({
  input: {
    fontFamily: fonts.MainRegular,
    backgroundColor: '#fff'
  }
})

export default styles
