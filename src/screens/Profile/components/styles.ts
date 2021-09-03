import { StyleSheet, ImageStyle, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  imagePodcast: ImageStyle
  podcastItemTextContainer: TextStyle
  podcastItem: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  imagePodcast: {
    width: 90,
    height: 90
  },
  podcastItemTextContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  podcastItem: {
    marginTop: 13,
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#eee'
  }
})

export default styles
