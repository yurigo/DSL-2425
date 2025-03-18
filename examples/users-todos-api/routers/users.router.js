import { Router } from "express";
import { router as routerUserTodos } from "./users/todos.router.js";

import {
  all,
  get,
  insert,
  remove,
  update,
} from "../controller/users.controller.js";

export const router = Router();

// router.param("id", function (req, res, next, id) {
//   // const id = req.params.id;
//   req.locals = {};
//   req.locals.id = id;
//   next();
// });

router.use("/:id/todos", routerUserTodos);

// CRUD
router.get("/", all);
router.get("/:id", get);
router.put("/:id", update);
router.post("/", insert);
router.delete("/:id", remove);
