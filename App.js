import React, { Component } from 'react';

import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
//import { ApolloProvider } from 'react-apollo';
//import { ApolloClient } from 'apollo-client';
//import { HttpLink } from 'apollo-link-http';
//import { InMemoryCache } from 'apollo-cache-inmemory';
import { Root, configureStore } from './src/navigator/AppNavigator';
//import { NETWORK_INTERFACE } from './src/config';

const App = () => {
  return (
    <Root />
  );
};
AppRegistry.registerComponent('App', () => App);

export default App;
//export default App;
