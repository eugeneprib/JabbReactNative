import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView, Text, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import store from './store'

const App = (): React.ReactElement => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    height: '100%',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <Text style={{ fontSize: 40 }}>Hello there</Text>
      </SafeAreaView>
    </Provider>
  )
}

export default App
