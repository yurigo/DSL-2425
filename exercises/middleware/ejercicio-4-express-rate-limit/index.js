import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
    // windowMs: 10 * 1000, // 1 minutes (default)
    limit: 5, // Limit each IP to 100 requests per `window`.
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
})


const PORT = 3000;

const app = express();

// Apply the rate limiting middleware to all requests.
app.use(limiter)

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.status(200).json({ hello: "world" })
})

app.get("/health", (req, res) => {
    res.status(200).send("OK")
})

app.get("/time", (req, res) => {

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


app.listen(PORT, () => {
    console.log(chalk.bgBlue.yellowBright("server levantado"))
    console.log(chalk.bgBlue.yellowBright("http://127.0.0.1:" + PORT))
})