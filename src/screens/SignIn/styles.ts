import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  keyBoardAvoidContainer: ViewStyle
  scrollView: ViewStyle
  intro: ViewStyle
  introText: TextStyle
  input: TextStyle
  bottomBlock: TextStyle
  registerBlock: ViewStyle
  registerDescription: TextStyle
  registerText: TextStyle
  button: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  keyBoardAvoidContainer: {
    flex: 1,
    padding: 25
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  intro: {
    marginTop: 16,
    marginBottom: 47
  },
  introText: {
    fontSize: 22
  },
  input: {
    marginBottom: 17,
    height: 58,
    paddingHorizontal: 24,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12
  },
  bottomBlock: {
    alignItems: 'center',
    marginBottom: 25
  },
  registerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 24
  },
  registerText: {
    fontSize: 15
  },
  registerDescription: {
    marginRight: 3,
    color: '#9A9A9A'
  },
  button: {
    width: '100%'
  }
})

export default styles
