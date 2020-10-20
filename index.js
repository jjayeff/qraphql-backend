// @ts-nocheck
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const MyGraphQLSchema = require('./schema');

const PORT = process.env.port || 3000;

mongoose
  .connect('mongodb://mongo:27017/qraphql-backend', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  })
);

app.listen(PORT);
console.log('Server running on localhost:', PORT);
