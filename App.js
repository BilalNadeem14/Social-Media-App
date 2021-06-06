import React from 'react'
import { View, Text, Platform, StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux';
import Login from './src/screens/Login'
import vh from './src/utils/units/vh';
import Navigator from './src/navigation'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <View style={styles.container}>
            <Navigator />
          </View>
        </PersistGate>
      </Provider>
    )

    // <Login/>
    // (
    //   <View>
    //     <Text>hey</Text>
    //   </View>
    // )
  }
}

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 5 * vh : StatusBar.currentHeight;


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',//'red'//
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },

})

