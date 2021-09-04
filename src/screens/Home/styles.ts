import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  title: TextStyle
  placeholder: TextStyle
  block: ViewStyle
  header: ViewStyle
  userName: TextStyle
  headerText: TextStyle
  profile: ViewStyle
  recentlyPlayedCard: ViewStyle
  popular: ViewStyle
  popularFirst: ImageStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 25
  },
  title: {
    marginBottom: 5,
    fontSize: 18,
    color: '#575757'
  },
  placeholder: {
    color: '#2A2A2A'
  },
  block: {
    marginTop: 30
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userName: {
    marginTop: 5
  },
  headerText: {
    marginTop: 4,
    color: '#7E7E7E'
  },

  profile: {
    marginLeft: 30
  },

  recentlyPlayedCard: {
    width: 200,
    marginTop: 15
  },

  popular: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  popularFirst: {
    marginRight: 15
  }
})

export { styles }
