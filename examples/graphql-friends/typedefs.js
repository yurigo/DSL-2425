export const typedefs = `
    type Query { 
        hello: String
        bye: Int
        otro: String
        users: [User]
        user(id: ID!): User
    }

    type User {
        id: ID!
        name: String
        age: Int
        friends: [User]
    }
`;
