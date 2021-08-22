import { StyleSheet } from 'react-native'
import { Styles } from './common/types'

const styles = StyleSheet.create<Styles>({
  text: {
    marginBottom: 5
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 14
  }
})

export { styles }
