import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  nothing: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  nothing: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
