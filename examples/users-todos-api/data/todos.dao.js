import { todos } from "./memory.js";

export const all = () => {
  return todos;
};

export const allBy = (userID) => {
  return todos.filter((t) => t.userID === userID);
};
