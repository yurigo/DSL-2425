import * as userDAO from "./DAO/userDAO.js";

// const root = {
//     hello() {
//       return "Hello world!";
//     },
//     bye() {
//       return 42;
//     },
//     otro() {
//       return "Lorem ipsum dolor sit amet";
//     },
//     users() {
//       return userDAO.all();
//     },
//     user(obj) {
//       return userDAO.get(obj.id);
//     },
//   };

export const resolvers = {
  Query: {
    hello: () => "hello world",
    bye: () => 42,
    otro: () => "Lorem ipsum dolor sit amet",
    users: () => userDAO.all(),
    user: (_, { id }) => {
      return userDAO.get(id);
    },
  },

  User: {
    friends: (ctx) => {
      console.log(ctx.id);
      return userDAO.allFrom(ctx.id);
    },
  },
};
