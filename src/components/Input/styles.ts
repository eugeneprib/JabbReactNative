import { StyleSheet, TextStyle } from 'react-native'

type Styles = {
  input: TextStyle
}

const styles = StyleSheet.create<Styles>({
  input: {
    backgroundColor: '#fff',
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 14
  }
})

export default styles
