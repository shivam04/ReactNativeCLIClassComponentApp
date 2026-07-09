/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Component } from "react";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

class App extends Component {

  constructor(props: any) {
    super(props);
    // Initialize the state object with an empty object
    this.state = {}
  }

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <Text onPress={() => this.setState({ name: 'Shivam' })}>
            Hello, {this.state?.name}!
          </Text>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
}

export default App;
