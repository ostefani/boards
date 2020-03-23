import { buildSchema } from 'graphql';

export default buildSchema(`
    type User {
      _id: ID!
      username: String!
      email: String!
      token: String!
    }
    type Task {
      _id: ID!
      title: String!
    }
    type Board {
      _id: String!
      title: String!
      tasks: [Task]
    }

    input UserInput {
      username: String!
      email: String!
      password: String!
    }
    input BoardInput {
      title: String!
    }

    type RootQuery {
      login(email: String!, password: String!): User
      verifyToken: User
      getBoards: [Board]
      getBoardData(id: ID!): Board
    }
    type RootMutation {
      createUser(userInput: UserInput): User
      createBoard(boardInput: BoardInput): Board
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
`);
