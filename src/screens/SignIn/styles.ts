import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  keyBoardAvoidContainer: ViewStyle
  scrollView: ViewStyle
  intro: TextStyle
  lets: TextStyle
  input: TextStyle
  bottomBlock: TextStyle
  row: ViewStyle
  link: ViewStyle
  button: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  keyBoardAvoidContainer: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 50
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  intro: {
    fontSize: 18
  },
  lets: {
    fontSize: 18,
    marginBottom: 40
  },
  input: {
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 4,
    marginBottom: 15
  },
  bottomBlock: {
    marginBottom: 25
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 10
  },
  link: {
    fontWeight: 'bold'
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center'
  }
})

export default styles
