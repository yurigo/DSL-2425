import express from "express";
import chalk from "chalk";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.json({name: "hello world"});
})

app.listen(PORT , ()=> {
    console.log(chalk.blue("server levantado"))
    console.log(chalk.blue("http://127.0.0.1:" + PORT))
})