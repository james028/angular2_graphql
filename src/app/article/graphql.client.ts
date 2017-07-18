import { ApolloClient, createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql',
    opts: {
      credentials: 'same-origin',
    },
  }),
});
export {
  client
}

const ProjectsQuery = gqlquery, getProjects($status: String) => {
projects (status: $status){
  edges {
    node {
      id
      name
    }
  }
}
};