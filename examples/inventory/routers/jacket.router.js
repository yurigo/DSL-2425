import { Router } from "express";
// const db = require('better-sqlite3')('foobar.db', options);
import sqlite3 from "better-sqlite3";
const options = {};
const db = sqlite3("./data/jacketdb.sqlite", options);

export const router = Router();

router.get("/", (req, res) => {
  const rows = db.prepare("SELECT * FROM jackets").all();
  console.log(rows);
  res.json(rows);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const row = db.prepare("SELECT * FROM jackets WHERE id = ?").get(id);
  res.json(row);
});
