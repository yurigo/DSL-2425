import { Router } from "express";

import {
  all,
  get,
  insert,
  remove,
  update,
} from "../controller/todos.controller.js";

export const router = Router();

// CRUD
router.get("/", all);
router.get("/:id", get);
router.put("/:id", update);
router.post("/", insert);
router.delete("/:id", remove);
