// @ts-nocheck
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const MyGraphQLSchema = require('./schema');

const PORT = process.env.port || 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  })
);

app.listen(PORT);
console.log('Server running on localhost:', PORT);
