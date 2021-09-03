import { StyleSheet, ViewStyle } from 'react-native'
import fonts from 'src/styles/fonts'

type Styles = {
  defaultWrapper: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  defaultWrapper: {
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
