// const db = require('better-sqlite3')('foobar.db', options);
import sqlite3 from "better-sqlite3";
const options = {};
const db = sqlite3("./data/db.sqlite", options);

const removePassword = (obj) => {
  const { password, ...elemWithoutPassword } = obj;
  return elemWithoutPassword;
};

export const all = (req, res) => {
  const rows = db.prepare("SELECT * FROM jackets").all();
  res.json(rows.map(removePassword));
};

export const get = (req, res) => {
  const { id } = req.params;
  const row = db.prepare("SELECT * FROM jackets WHERE id = ?").get(id);
  res.json(removePassword(row));
};

export const update = (req, res) => {
  const { id } = req.params;

  const data = req.body;

  db.prepare("UPDATE jackets SET name = ? , password = ? WHERE id = ?").run(
    data.name,
    data.password,
    id
  );

  res.status(204).end();
};

export const insert = (req, res) => {
  const { id } = req.params;

  const data = req.body;

  db.prepare("INSERT INTO jackets (ID,name,password) VALUES (?,?,?);").run(
    data.id,
    data.name,
    data.password
  );

  res.send(201).send("CREATED");
};

export const remove = (req, res) => {
  const { id } = req.params;

  db.prepare("DELETE FROM jackets WHERE id = ?").run(id);

  res.send(204).end();
};
