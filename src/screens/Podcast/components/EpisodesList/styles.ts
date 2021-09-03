import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  flatList: ViewStyle
  flatListFooter: ViewStyle
  emptyComponentSpinnerWrapper: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  flatList: {
    flexGrow: 1
  },
  flatListFooter: {
    paddingBottom: 15
  },
  emptyComponentSpinnerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

export default styles
