import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 50
  },
  container: {
    flex:1,
    justifyContent: 'space-between',
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
    marginTop: 25,
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
  },
})

export { styles }
