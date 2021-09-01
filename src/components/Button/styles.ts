import { StyleSheet } from 'react-native'
import fonts from 'src/styles/fonts'
import { Styles } from './common/types'

const styles = StyleSheet.create<Styles>({
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    paddingHorizontal: 15,
    borderRadius: 18
  },
  text: {
    fontFamily: fonts.MainBold,
    fontSize: 18
  }
})

export default styles
