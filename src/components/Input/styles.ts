import { StyleSheet, TextStyle } from 'react-native'
import fonts from 'src/styles/fonts'

type Styles = {
  input: TextStyle
}

const styles = StyleSheet.create<Styles>({
  input: {
    height: 58,
    paddingHorizontal: 24,
    fontSize: 15,
    fontFamily: fonts.MainRegular,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12
  }
})

export default styles
