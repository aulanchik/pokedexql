import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { Client } from './graphql'
import App from './containers/App';
import './assets/index.css'

ReactDOM.render(
  <React.Fragment>
    <ApolloProvider client={Client}>
      <App />
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById('root')
);
