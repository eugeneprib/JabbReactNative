import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  line: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexGrow: 1,
    padding: 25,
    paddingBottom: 95,
    backgroundColor: '#fff'
  },
  line: {
    width: '90%',
    height: 1,
    marginVertical: 18,
    backgroundColor: '#ECECEC'
  }
})

export default styles
