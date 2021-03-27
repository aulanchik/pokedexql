import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const endpointUrl = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    credentials: 'same-origin'
});

const client = new ApolloClient({
    link: endpointUrl,
    cache: new InMemoryCache()
});

export default client;