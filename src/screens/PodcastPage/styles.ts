import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  podcastBackground: {
    flex: 1,
    height: 150,
    marginBottom: 65
  },
  podcastLogo: {
    flex: 1,
    height: 120,
    width: 120,
    borderRadius: 5
  },
  podcastNameContainer: {
    marginTop: 5,
    alignItems: 'center'
  },
  podcastName: {
    textAlign: 'center',
    fontSize: 24,
    width: 250,
    fontWeight: 'bold'
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
    borderRadius: 5,
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
    alignItems: 'center',
    marginTop: 20
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
    backgroundColor: '#aaa',
    width: 45,
    height: 45,
    margin: 10
  }
})

export default styles
