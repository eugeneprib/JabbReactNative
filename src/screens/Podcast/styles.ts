import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  podcastBackground: {
    flex: 1,
    height: 150,
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
    alignItems: 'center'
  },
  podcasterNameContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  podcastName: {
    textAlign: 'center',
    width: 250
  },
  podcastAuthorText: {
    color: '#000',
    fontSize: 15
  },
  podcastLogoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -60,
    elevation: 2,
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
    marginTop: 15
  },
  edisodesCount: {
    marginLeft: 5
  },
  episodesContainer: {
    marginTop: 20,
    paddingHorizontal: 35
  },
  episodesContainerTitle: {
    fontSize: 20,
    color: '#444',
    fontWeight: 'bold',
    marginBottom: 20
  },
  backButton: {
    position: 'absolute',
    top: -15,
    left: 10
  }
})

export default styles
