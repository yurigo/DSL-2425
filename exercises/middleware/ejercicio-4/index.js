import express from "express";
import chalk from "chalk";
import morgan from "morgan";

const PORT = 3000;

const app = express();

let ips = {}



// setTimeout(()=> {
//     console.log("ips:" , ips)
//     ips = {}
//     setTimeout(()=>{
//         console.log("ips:" , ips)
//         ips = {}
//         setTimeout(()=>{
//             console.log("ips:" , ips)
//             ips = {}
//             setTimeout(()=>{
//                 console.log("ips:" , ips)
//                 ips = {}
//                 setTimeout(()=>{
//                     console.log("ips:" , ips)
//                     ips = {}
//                     setTimeout(()=>{
//                         console.log("ips:" , ips)
//                         ips = {}
//                            ...
//                     },10000)
//                 },10000)
//             },10000)
//         },10000)
//     },10000)
// }, 10000);

setInterval(()=>{
    console.log("reseteando ips:" , ips)
    ips = {}
} , 10000);

// const resetIPS = () => {
//     console.log("reset ips:" , ips)
//     ips = {}
//     setTimeout(resetIPS, 10000);
// }

// resetIPS();

const rateLimiterMiddleware = (req, res, next) => {
    console.log(chalk.bgCyan("rateLimiterMiddleware"))

    const actualIpRequester = req.ip;

    if (ips[actualIpRequester]) ips[actualIpRequester]++;
    else ips[actualIpRequester] = 1;
    console.log(ips)

    if (ips[actualIpRequester] > 5) return next({status: 509, error: "mensaje de error" })

    return next();
}

// app.get("/reset" , (req, res) => {
//     ips = {}
//     res.status(200).end();
// })

app.use(rateLimiterMiddleware)


app.use(morgan("tiny"));

app.get("/" , (req,res) => {
    res.status(200).json({hello: "world"})
})

app.get("/health" , (req,res) => {
    res.status(200).send("OK")
})

app.get("/time" , (req,res) => {

    const now = new Date();


    res.status(200).json({
        hour: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
    })
})

const logErrorMiddleware = (err, req, res, next) => {
    //err -> {status: 400, error: "el primer parámetro está mal"}
    const status = err.status;
    const message = err.error;

    console.log(chalk.red(status))
    console.log(chalk.yellow(message))

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
    console.log(chalk.bgBlue.yellowBright("server levantado"))
    console.log(chalk.bgBlue.yellowBright("http://127.0.0.1:" + PORT))
})