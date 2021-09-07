import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

type Styles = {
  viewContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  viewContainer: { marginBottom: 10 }
})

export default styles
