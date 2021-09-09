import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  center: ViewStyle
  header: ViewStyle
  backButton: ViewStyle
  headerText: TextStyle
  image: ImageStyle
  description: ViewStyle
  authorName: TextStyle
  podcastName: TextStyle
  episodesName: TextStyle
  playerWrapper: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30
  },
  backButton: {
    position: 'absolute',
    left: 0
  },
  headerText: {
    color: '#484848'
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 15
  },
  description: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    textAlign: 'center'
  },
  authorName: {
    textAlign: 'center',
    marginBottom: 12,
    color: '#4D4D4D'
  },
  podcastName: {
    textAlign: 'center',
    marginBottom: 12
  },
  episodesName: {
    textAlign: 'center',
    color: '#8D8D8D'
  },
  playerWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
})

export default styles
