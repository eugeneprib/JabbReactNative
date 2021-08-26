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
    width: 65,
    height: 65,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: '#EEE'
  },
  label: {
    fontSize: 20
  },
  author: {
    fontSize: 9,
    color: '#7C7C7C'
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  time: {
    marginLeft: 4,
    fontSize: 9
  }
})

export default styles
