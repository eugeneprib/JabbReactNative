import { StyleSheet, ImageStyle, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  image: ImageStyle
  textContainer: TextStyle
  author: TextStyle
  date: ViewStyle
  time: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#eee'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 20
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  author: {
    fontSize: 12,
    marginTop: 5
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  time: {
    marginLeft: 4,
    fontSize: 10
  }
})

export default styles
