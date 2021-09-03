import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

type Styles = {
  viewContainer: ViewStyle
  textNavigation: TextStyle
  textNavigationWithOpacity: TextStyle
}

const styles = StyleSheet.create<Styles>({
  viewContainer: { alignItems: 'center', flexDirection: 'row' },
  textNavigation: { color: '#000', marginLeft: 10, fontSize: 12 },
  textNavigationWithOpacity: {
    color: '#000',
    marginLeft: 10,
    fontSize: 12
  }
})

export default styles
