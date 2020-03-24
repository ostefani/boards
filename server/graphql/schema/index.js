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
    type GroupOfTasks {
      _id: ID!
      title: String!
      tasks: [Task]
    }
    type Board {
      _id: String!
      title: String!
      GroupOfTasks: [GroupOfTasks]
    }

    input UserInput {
      username: String!
      email: String!
      password: String!
    }
    input BoardInput {
      title: String!
    }
    input GroupOfTasksInput {
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
      createGroupOfTasks(groupOfTasksInput: GroupOfTasksInput): GroupOfTasks
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
`);
