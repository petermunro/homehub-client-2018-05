import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import introspectionQueryResultData from "./fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4005/graphql" }),
  cache: new InMemoryCache({ fragmentMatcher })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
