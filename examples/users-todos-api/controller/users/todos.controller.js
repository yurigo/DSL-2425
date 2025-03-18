import * as todoDAO from "../../data/todos.dao.js";

export const all = (req, res) => {
  console.log(req.params.id);
  res.json(todoDAO.allBy(req.params.id));
};

export const get = all;
export const insert = all;
export const remove = all;
export const update = all;
