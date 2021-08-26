import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  background: ImageStyle
  overlay: ViewStyle
  author: TextStyle
  title: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#EEE',
    overflow: 'hidden'
  },
  background: {
    justifyContent: 'flex-end',
    height: 180
  },
  overlay: {
    height: 85,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },
  author: {
    marginBottom: 6,
    color: '#EFEFEF',
    fontSize: 9
  },
  title: {
    color: '#EFEFEF'
  }
})

export { styles }
