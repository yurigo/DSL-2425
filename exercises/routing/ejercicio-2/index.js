import express from "express";
import chalk from "chalk";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    if (!req.query["n"]) return res.status(404).send("");

    const numero = parseInt(req.query["n"]);

    const tabla = {}

    for (let i = 0 ; i< 10 ; i++){
        tabla[`${numero}x${i}`] = numero * i;
    }

    res.json({numero, tabla});
})

app.listen(PORT , ()=> {
    console.log(chalk.blue("server levantado"))
    console.log(chalk.blue("http://127.0.0.1:" + PORT))
})