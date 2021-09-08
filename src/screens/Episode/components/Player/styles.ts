import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type Styles = {
  sliderWrapper: ViewStyle
  timeWrapper: ViewStyle
  timePosition: ViewStyle
  timeDuration: ViewStyle
  row: ViewStyle
  slider: ViewStyle
  jumpButton: ViewStyle
  controlButton: ViewStyle
  time: TextStyle
}

const styles = StyleSheet.create<Styles>({
  sliderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeWrapper: {
    position: 'absolute'
  },
  timePosition: {
    left: 0
  },
  timeDuration: {
    right: 0
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  slider: {
    width: '100%',
    height: 45
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
  controlButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 58,
    height: 58,
    marginHorizontal: 18,
    backgroundColor: '#EEEEEE',
    borderRadius: 29
  },
  time: {
    fontSize: 12,
    color: '#C7C7C7',
    fontWeight: '700'
  }
})

export default styles
