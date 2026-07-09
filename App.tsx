/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Component } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

class App extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Hello World!</Text>
      </SafeAreaView>
    )
  }
}

export default App;
