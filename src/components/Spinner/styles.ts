import { StyleSheet, ViewStyle } from 'react-native'

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
