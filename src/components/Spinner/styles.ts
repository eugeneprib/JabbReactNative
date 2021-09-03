import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  spinnerWrapper: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  spinnerWrapper: {
    flexGrow: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
