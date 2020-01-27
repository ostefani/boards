import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
/* const schema = buildSchema(`
    type Query {
        createUser(user: String!): String!
    }
`); */
export default buildSchema(`
    type User {
      _id: ID!
      email: String!
      token: String!
    }
    input UserInput {
      email: String!
      password: String!
    }
    type RootQuery {
      login(email: String!, password: String!): User
      verifyToken(token: String!): User
    }
    type RootMutation {
      createUser(userInput: UserInput): User
    }
    schema {
      query: RootQuery
      mutation: RootMutation
    }
`);
