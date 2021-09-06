import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  episodeNumberCont: ViewStyle
  episodeNumber: TextStyle
  episodeInfo: ViewStyle
  episodeInfoTitle: ViewStyle
  episodeInfoDate: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    height: 50
  },
  episodeNumberCont: {
    flex: 0.1,
    width: 20
  },
  episodeNumber: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#555'
  },
  episodeInfo: {
    flex: 0.9,
    paddingHorizontal: 30,
    justifyContent: 'space-around'
  },
  episodeInfoTitle: {
    width: 200
  },
  episodeInfoDate: {
    fontSize: 12,
    marginTop: 10,
    color: '#555'
  }
})

export default styles
