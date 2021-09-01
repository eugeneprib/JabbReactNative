import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  image: ImageStyle
  label: TextStyle
  author: TextStyle
  date: TextStyle
  time: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: '#EEE'
  },
  label: {
    fontSize: 20
  },
  author: {
    fontSize: 12,
    color: '#7C7C7C'
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
