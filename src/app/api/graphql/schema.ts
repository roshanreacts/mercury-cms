const typeDefs = `
  type Query {
    hello: String
  }

  type Mutation {
    login(email: String!, password: String!):Response
  }

  type Response {
    message: String,
    token: String,
    name: String,
    email: String,
    role: String,
    id: String
  }
`;
export default typeDefs;
