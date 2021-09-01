import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  userInfoContaienr: ViewStyle
  image: ImageStyle
  nameContainer: TextStyle
  userInfoItem: ViewStyle
  userInfoItemText: TextStyle
  userInfoItemTextDelete: TextStyle
  userDataContainer: ViewStyle
  logOutButton: ViewStyle
  userContacts: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 20,
    flex: 1
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
  }
})

export default styles
