import express from "express";
import chalk from "chalk";

const PORT = 3000;

const app = express();

let visitas = {};

function visitCounter(req,res,next){
    const key = req.path;
    if (visitas[key]) visitas[key]++;
    else visitas[key] = 1;
    next();
}

app.use(visitCounter);

app.get("/visitas", (req, res) => {
    res.json(visitas);
})

app.get("*", (req, res) => {
    res.json({name: req.path});
})


app.listen(PORT , ()=> {
    console.log(chalk.blue("server levantado"))
    console.log(chalk.blue("http://127.0.0.1:" + PORT))
})