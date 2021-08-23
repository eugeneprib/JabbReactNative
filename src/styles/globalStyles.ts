import { StyleSheet, ViewStyle } from 'react-native'
import fonts from 'src/styles/fonts'

interface Styles {
  container: ViewStyle
  greeting: ViewStyle
}

export default StyleSheet.create<Styles>({
  container: {
    height: '100%',
    backgroundColor: '#f1f1f1',
  },
  greeting: {
    fontSize: 25,
    fontFamily: fonts.MainMedium
  }
})
