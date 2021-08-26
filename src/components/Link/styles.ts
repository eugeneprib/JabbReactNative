import { StyleSheet, TextStyle } from 'react-native'

type Styles = {
  text?: TextStyle
}

const styles = StyleSheet.create<Styles>({
  text: {
    fontWeight: 'bold'
  }
})

export default styles
