import { StyleSheet, ViewStyle } from 'react-native'

interface Styles {
  statusBar: ViewStyle
  container: ViewStyle
}

export default StyleSheet.create<Styles>({
  statusBar: {
    height: '100%',
    backgroundColor: '#fff'
  },
  container: {
    padding: 25,
    backgroundColor: '#fff'
  }
})
