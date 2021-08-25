import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  image: ImageStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#EEE',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export { styles }
