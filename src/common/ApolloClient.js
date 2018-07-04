import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-client-preset'

const httpLink = new HttpLink({
  uri: 'http://localhost:3080/8B8kMWAunyMhxM9q9OhMVCJiXpxBIqpo',
})

const middlewareHeaderLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'client-codename': 'H5-BLOGS',
      'Access-Control-Allow-Origin': '*',
    },
  })
  return forward(operation)
})

const httpLinkWithHeader = middlewareHeaderLink.concat(httpLink)

const client = new ApolloClient({
  link: httpLinkWithHeader,
  cache: new InMemoryCache(),
})

export default client
