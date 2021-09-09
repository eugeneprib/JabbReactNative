import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  podcastBackgroundWrapper: ViewStyle
  podcastBackground: ViewStyle
  podcastLogo: ImageStyle
  podcastNameContainer: ViewStyle
  podcasterNameContainer: ViewStyle
  podcastName: ViewStyle
  podcastAuthorText: TextStyle
  podcastLogoContainer: ViewStyle
  description: ViewStyle
  descriptionText: TextStyle
  episodeCounter: ViewStyle
  edisodesCount: TextStyle
  episodesContainer: ViewStyle
  episodesContainerTitle: ViewStyle
  backButton: ViewStyle
  nothing: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 0,
    paddingBottom: 25,
    flexGrow: 1
  },
  podcastBackgroundWrapper: {
    position: 'relative',
    height: 250
  },
  podcastBackground: {
    flex: 1,
    height: '100%',
    marginBottom: 65
  },
  podcastLogo: {
    flex: 1,
    height: 150,
    width: 150,
    borderRadius: 20
  },
  podcastNameContainer: {
    marginTop: 5,
    alignItems: 'center',
    paddingHorizontal: 35
  },
  podcasterNameContainer: {
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 35
  },
  podcastName: {
    textAlign: 'center'
  },
  podcastAuthorText: {
    color: '#000',
    fontSize: 15
  },
  podcastLogoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -70,
    elevation: 3,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'transparent'
  },
  description: {
    alignItems: 'center'
  },
  descriptionText: {
    textAlign: 'center',
    width: 300,
    marginTop: 7,
    lineHeight: 20,
    color: '#555'
  },
  episodeCounter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 35
  },
  edisodesCount: {
    marginLeft: 5
  },
  episodesContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 35
  },
  episodesContainerTitle: {
    color: '#444',
    fontSize: 20,
    marginBottom: 20
  },
  backButton: {
    position: 'absolute',
    top: -15,
    left: 10
  },
  nothing: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
