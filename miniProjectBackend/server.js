const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema'); 

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = express();

async function startServer() {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });
}

startServer();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`GraphQL is available at http://localhost:${PORT}${apolloServer.graphqlPath}`);
});
