import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  line: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    height: '100%',
    padding: 25
  },
  line: {
    width: '90%',
    height: 1,
    marginVertical: 18,
    backgroundColor: '#ECECEC'
  }
})

export default styles
