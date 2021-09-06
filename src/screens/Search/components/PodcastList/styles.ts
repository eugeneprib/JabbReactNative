import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  item: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: '100%'
  },
  item: {
    marginBottom: 13
  }
})

export default styles
