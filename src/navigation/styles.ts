import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  spinnerContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  spinnerContainer: {
    flexGrow: 1,
    paddingBottom: 58
  }
})

export default styles
