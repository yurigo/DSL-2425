import * as userDAO from "../data/users.dao.js";

export const all = (req, res) => {
  res.json(userDAO.all());
};
export const get = (req, res) => {
  res.json(userDAO.get(req.params.id));
};
export const insert = all;
export const remove = all;
export const update = all;
