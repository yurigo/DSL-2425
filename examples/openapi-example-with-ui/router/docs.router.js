import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import yaml from "js-yaml";
import fs from "node:fs";

export const router = Router();

router.get("/", (req, res) => {
  res.json({
    swagger: "http://localhost:4000/docs/swagger",
    swagger: "http://localhost:4000/docs/redoc",
  });
});

// const swaggerDocument = require('./swagger.json');

const doc = yaml.load(fs.readFileSync("./openapi.yml", "utf8"));

router.get("/openapi.yml", (req, res) => {
  res.sendFile("/openapi.yml", { root: "." });
});

router.get("/openapi.json", (req, res) => {
  res.json(doc);
});

router.use("/swagger", swaggerUi.serve);
router.get("/swagger", swaggerUi.setup(doc));

router.get("/redoc", (req, res) => {
  res.sendFile("/redoc/redoc.html", { root: "." });
});

export default router;
