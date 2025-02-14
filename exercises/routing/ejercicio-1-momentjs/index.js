import express from "express";
import chalk from "chalk";
import moment from "moment";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.json({
        misilec: `http://127.0.0.1:${PORT}/milisec`,
        date: `http://127.0.0.1:${PORT}/date`,
        time: `http://127.0.0.1:${PORT}/time`,

    });
})

app.get("/milisec", (req, res) => {
    res.json({data: Date.now()});
})

// dd/MM/yyyy
app.get("/date", (req,res)=>{
    res.json({data: moment().format("DD/MM/YYYY")});
})

//hh:mm:ss
app.get("/time", (req,res)=>{
    res.json({data: moment().format("HH:mm:ss")});
})

app.listen(PORT , ()=> {
    console.log(chalk.blue("server levantado"))
    console.log(chalk.blue("http://127.0.0.1:" + PORT))
})