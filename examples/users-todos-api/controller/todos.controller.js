import * as todosDAO from "../data/todos.dao.js";

export const all = (req, res) => {
  res.json(todosDAO.all());
};
export const get = all;
export const insert = all;
export const remove = all;
export const update = all;
