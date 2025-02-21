import express from "express";
import chalk from "chalk";
import morgan from "morgan";

const PORT = 3000;

const app = express();

//app.use("/users", UsersRouter)
// app.use(express.static("public"))

app.use(morgan("tiny"));

const verificaQueSeanEnteros = (req,res,next) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;

    const n1 = parseInt(num1);
    if (isNaN(n1)) return next({status: 400, error: "el primer parámetro está mal"}) // res.status(400).json({error: "el primer parámetro está mal"})
        
    const n2 = parseInt(num2);
    if (isNaN(n2)) return next({status: 400, error: "el segundo parámetro está mal"}) //res.status(400).json({error: "el segundo parámetro está mal"})

    req.N1 = n1;
    req.N2 = n2;

    next();
}

app.get("/:num1/:num2", verificaQueSeanEnteros, (req, res) => {
    res.json({
        valor1: req.N1,
        valor2: req.N2,
        suma: req.N1 + req.N2,
        resta: req.N1 - req.N2,
        multiplicacion: req.N1 * req.N2,
        division: req.N1 / req.N2,
        exponencial: req.N1 ** req.N2,
    });
})


const logErrorMiddleware = (err, req, res, next) => {
    //err -> {status: 400, error: "el primer parámetro está mal"}
    const status = err.status;
    const message = err.error;

    console.log(chalk.red(status))
    console.log(chalk.red(message))

    next(err);

}

const errorMiddleware = (err, req, res, next) => {
    //err -> {status: 400, error: "el primer parámetro está mal"}
    const status = err.status;
    const message = err.error;

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