import { StyleSheet, ViewStyle } from 'react-native'

interface Styles {
  container: ViewStyle
}

export default StyleSheet.create<Styles>({
  container: {
    height: '100%',
    backgroundColor: '#f3f3f3'
  }
})
