import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';

const httpLink = new HttpLink({
  uri: 'PUT YOUR GRAPHQL SERVER URL HERE'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
