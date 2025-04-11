const users = [
  {
    id: 1,
    name: "Alice",
    hash: "???",
  },
];

export const all = () => users;
export const add = (user) => users.push(user);
export const get = (username) => {
  return users.find((u) => u.name === username);
};
