import express from "express";
import chalk from "chalk";

import { factorial } from "./utils/factorial.js";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    const n = parseInt(req.query.n);
    res.json({factorial: factorial(n)});
})

app.listen(PORT , ()=> {
    console.log(chalk.red("server levantado"))
    console.log(chalk.red("http://127.0.0.1:" + PORT))
})