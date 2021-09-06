import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  userInfoContaienr: ViewStyle
  image: ImageStyle
  nameContainer: TextStyle
  userInfoItem: ViewStyle
  userInfoItemText: TextStyle
  userInfoItemTextDelete: TextStyle
  podcastsTitle: TextStyle
  userDataContainer: ViewStyle
  logOutButton: ViewStyle
  userContacts: ViewStyle
  FlatListContainer: ViewStyle
  loadingContainer: ViewStyle
  center: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 20,
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  podcastsTitle: {
    fontSize: 18,
    color: '#090909'
  },
  userInfoContaienr: {
    marginTop: 25,
    flexDirection: 'row'
  },
  image: {
    width: 118,
    height: 118,
    borderRadius: 59
  },
  nameContainer: {
    marginLeft: 30
  },
  userInfoItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userInfoItemText: {
    color: '#7E7E7E',
    marginBottom: 4,
    marginLeft: 10
  },
  userInfoItemTextDelete: {
    marginBottom: 4,
    marginLeft: 10,
    color: '#ff7777'
  },
  userDataContainer: {
    marginVertical: 40,
    color: '#fff'
  },
  loadingContainer: {
    flexGrow: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logOutButton: {
    marginTop: 35,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: '#090909',
    borderRadius: 10,
    borderWidth: 2
  },
  userContacts: {
    marginTop: 5
  },
  FlatListContainer: {
    paddingBottom: 160
  }
})

export default styles
