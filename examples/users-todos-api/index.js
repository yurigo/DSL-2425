import express from "express";
import chalk from "chalk";
import cors from "cors";
import { router as routerUsers } from "./routers/users.router.js";
import { router as routerTodos } from "./routers/todos.router.js";

const PORT = 3000;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", routerUsers);
app.use("/todos", routerTodos);

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
    users: `${BASE_URL}/users`,
    todos: `${BASE_URL}/todos`,
  });
});

app.listen(PORT, () => {
  console.log(chalk.blue("server levantado"));
  console.log(chalk.blue(BASE_URL));
});
