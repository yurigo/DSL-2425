import { Router } from "express";
import {
  all,
  get,
  post,
  update,
  remove,
} from "../controller/user.controller.js";

export const router = Router();

router.get("/", all);
router.get("/:id", get);
router.post("/", post);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
