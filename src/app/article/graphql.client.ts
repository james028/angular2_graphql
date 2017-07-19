import { ApolloClient, createNetworkInterface } from 'apollo-client';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://mobileapi.wp.pl/v1/graphql'),
});

