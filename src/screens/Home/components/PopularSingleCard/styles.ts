import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  cardRight: ViewStyle
  background: ImageStyle
  overlay: ViewStyle
  author: TextStyle
  title: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: '47%',
    borderRadius: 15,
    backgroundColor: '#EEE',
    overflow: 'hidden',
    marginBottom: 15
  },
  cardRight: {
    marginLeft: 15
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
    fontSize: 12
  },
  title: {
    color: '#EFEFEF'
  }
})

export default styles
