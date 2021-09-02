import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  flatList: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  flatList: {
    flexGrow: 1
  }
})

export default styles
