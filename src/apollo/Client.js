import { ApolloClient, InMemoryCache } from "@apollo/client";
const ServerIP = "http://61.83.147.71:7700/graphql";
const cache = new InMemoryCache();

export default new ApolloClient({
  cache,
  uri: ServerIP,
});
