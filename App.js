import React, { Component } from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Root, configureStore } from './src/navigator/AppNavigator';
import { NETWORK_INTERFACE } from './src/config';
import { handleFCMNotification } from './src/services/firebasenotification'


StatusBar.setBarStyle('light-content', true);


const client = new ApolloClient({
  link: new HttpLink({ uri: NETWORK_INTERFACE }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
  ,
  cache: new InMemoryCache()
})

const App = () => {

  return (
    <Provider store={configureStore({})}>
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </Provider >
  );
};
AppRegistry.registerComponent('App', () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', handleFCMNotification)

export default App;
//export default App;
