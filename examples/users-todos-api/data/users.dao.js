import { users } from "./memory.js";

export const all = () => {
  return users;
};

export const get = (id) => {
  return users.find((u) => u.id === id);
};
