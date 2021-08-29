import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  sliderWrapper: ViewStyle
  positionWrapper: ViewStyle
  row: ViewStyle
  jumpButton: ViewStyle
  jumpIcon: ViewStyle
  controlButton: ViewStyle
  time: TextStyle
  duration: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  sliderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  positionWrapper: {
    width: '15%',
    alignItems: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  jumpButton: {
    width: 36,
    height: 36,
    margin: 10,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  jumpIcon: {
    position: 'absolute',
    top: 6
  },
  controlButton: {
    backgroundColor: '#e1e1e1',
    width: 46,
    height: 46,
    margin: 10,
    borderRadius: 46,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    fontSize: 12
  },
  duration: {}
})

export default styles
