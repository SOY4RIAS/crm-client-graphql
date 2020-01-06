import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER_URI,
    onError: ({ networkError, graphQLErrors, operation }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError);
        console.log('operation', operation);
    }
})
