import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ImageStyle
  overlay: ViewStyle
  author: TextStyle
  description: ViewStyle
  title: TextStyle
  icon: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    marginRight: 15,
    justifyContent: 'flex-end',
    height: 200,
    backgroundColor: '#EEE',
    borderRadius: 20,
    overflow: 'hidden'
  },
  overlay: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },
  author: {
    marginBottom: 2,
    color: '#EFEFEF'
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#EFEFEF',
    flexShrink: 1
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 52,
    marginLeft: 15,
    borderRadius: 26,
    backgroundColor: '#EFEFEF'
  }
})

export { styles }
