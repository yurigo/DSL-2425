import * as dao from "../DAO/user.dao.js";

export const all = (req, res, next) => {
  return res.json(dao.all());
};

export const get = (req, res, next) => {
  res.json(dao.get(req.params.id));
};

export const post = (req, res, next) => {
  dao.post(req.body);
  res.send(201).end();
};

export const update = (req, res, next) => {
  dao.update(req.params.id, req.body);
  res.send(204).end();
};

export const remove = (req, res, next) => {
  dao.remove(req.params.id);
  res.send(204).end();
};
