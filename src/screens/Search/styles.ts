import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  line: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  line: {
    width: '90%',
    height: 1,
    marginVertical: 18,
    backgroundColor: '#ECECEC'
  }
})

export default styles
