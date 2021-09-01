import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  header: ViewStyle
  backButton: ViewStyle
  headerText: TextStyle
  imageWrapper: ViewStyle
  image: ViewStyle
  designationBlock: ViewStyle
  episodesName: TextStyle
  playerWrapper: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
    position: 'relative'
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: -20,
    left: 10
  },
  headerText: {
    color: '#7E7E7E'
  },
  imageWrapper: {
    flex: 0.4,
    width: '100%'
  },
  image: {
    flex: 0.4,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 15
  },
  designationBlock: {
    flexDirection: 'column',
    flex: 0.25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  episodesName: {
    marginTop: 10
  },
  playerWrapper: {
    flexDirection: 'column',
    flex: 0.25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
})

export default styles
