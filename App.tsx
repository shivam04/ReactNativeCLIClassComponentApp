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

  // Define a "componentDidMount" method that gets called after the component is mounted to the DOM
  componentDidMount() {
    console.log('Component is mounted');
  }

  /**
   * Defines a "shouldComponentUpdate" method that gets called before the component is updated
   * @param nextProps - the props that the component will receive if it updates (read only)
   * @param nextState - the state that the component will receive if it updates (read only)
   * @param nextContext -  the context that the component will receive if it updates (read only)
   * @returns {boolean} -  Return true to allow the component to update, or false to prevent it from updating
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // Log a message that indicates we're checking if the component should update
    console.log('Checking if component should update');
    //Allows updating the component
    return true;
  }

  /**
     * Define a "getSnapshotBeforeUpdate" method that gets called right before the component is updated
     * @param prevProps - the props that the component had before the update (read only)
     * @param prevState - the state that the component had before the update (read only)
     * @returns {null}
     */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Log a message that indicates we're getting a snapshot of the component before it updates
    console.log('Getting snapshot before component updates');
    return null;
  }

  /***
   *  Define a "componentDidUpdate" method that gets called after the component is updated
   * @param prevProps  - the props that the component had before the update (read only)
   * @param prevState  - the state that the component had before the update (read only)
   * @param snapshot  - the value returned by getSnapshotBeforeUpdate
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    // Log a message that indicates the component has updated
    console.log('Component has updated');
  }

  /**
   * Define a "componentWillUnmount" method that gets called right before the component is unmounted from the DOM
   */
  componentWillUnmount() {
    // Log a message that indicates the component will unmount
    console.log('Component will unmount');
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
