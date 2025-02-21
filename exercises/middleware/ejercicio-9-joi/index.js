import express from "express";
import chalk from "chalk";
import morgan from "morgan";

import {schema} from "./schemas/num1num2.schema.js"


const PORT = 3000;

const app = express();
//app.use("/users", UsersRouter)
// app.use(express.static("public"))
app.use(morgan("tiny"));

const verificaQueSeanEnteros = (req,res,next) => {
    // const num1 = req.params.num1;
    // const num2 = req.params.num2;

    // console.log(req.params)
    
    // const obj = {
    //     num1: num1,
    //     num2: num2
    // }

    const {value, error} = schema.validate(req.params);

    if (error) return next({status: 400, error: error.message})

    req.N1 = value.num1;
    req.N2 = value.num2;

    next();
}

app.get("/:num1/:num2", verificaQueSeanEnteros, (req, res) => {
    const {N1, N2} = req;

    res.json({
        valor1: N1,
        valor2: N2,
        suma: N1 + N2,
        resta: N1 - N2,
        multiplicacion: N1 * N2,
        division: N1 / N2,
        exponencial: N1 ** N2,
    });
})


const logErrorMiddleware = (err, req, res, next) => {
    //err -> {status: 400, error: "el primer parámetro está mal"}
    // const status = err.status;
    // const message = err.error;

    const {status, error: message} = err;

    console.log(chalk.red(status))
    console.log(chalk.red(message))

    next(err);

}

const errorMiddleware = (err, req, res, next) => {
    const {status, error: message} = err;

    res.status(status).json({
        error: message
    })

}

app.use(logErrorMiddleware);
app.use(errorMiddleware);


app.listen(PORT , ()=> {
    console.log(chalk.blue("server levantado"))
    console.log(chalk.blue("http://127.0.0.1:" + PORT))
})