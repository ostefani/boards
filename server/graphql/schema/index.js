import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
        createUser(user: String!): String!
    }
`);

console.log('schema: ', schema);

export default schema;
