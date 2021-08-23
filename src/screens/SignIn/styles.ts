import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1
  },
  container: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center'
  },
  topBlock: {
    flex: 1,
    flexGrow: 1,
  },
  hello: {
    fontSize: 36,
    fontWeight: '700'
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
    flex: 1,
    flexDirection: 'column',
    marginTop: 25
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 10
  },
  forgot: {
    fontSize: 13
  },
  link: {
    fontWeight: 'bold'
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center'
  },
})

export { styles }
