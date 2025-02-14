import express from "express";
import chalk from "chalk";

const PORT = 3000;

const app = express();


function checkIsNumber(req, res, next) {
    const num = parseInt(req.params.NUMBER);

    if (isNaN(num)) return next("el numero es impar");

    req.NUMBER = num
    next()

    // if (!isNaN(num)) {
    //     req.NUMBER = num
    //     next() //OK
    // }
    // else {
    //     next("el numero es impar") // NOK
    // }
}


function checkIsEven(req, res, next) {
    const num = req.NUMBER;

    if (num % 2 !== 0) return next("es impar, prueba con un numer par, gracias!");

    next();

    // if (num % 2 === 0) {
    //     next();  // OK
    // }
    // else {
    //     next("es impar, prueba con un numer par, gracias!")
    // }
}

function endWareNumber(req, res, next) {
    res.json({
        name: "hello world",
        number: req.NUMBER
    });
}

app.get("/salchicha", (req, res) => {
    res.status(418).send("🌭")
})

const users = [{
    id: 1,
    nombre: "Alice"
},
{
    id: 2,
    nombre: "Bob"
},
{
    id: 3,
    nombre: "Charlie"
}
]

function getUsers(req, res, next) {
    res.json(users);
}

function getUser(req, res, next) {
    const selectedUser = users.find(elem => elem.id === req.NUMBER)
    res.json(selectedUser);
}


app.get("/users", getUsers)
app.get("/users/:NUMBER", checkIsNumber, getUser)
app.get("/:NUMBER", checkIsNumber, checkIsEven, endWareNumber)


function errorHandlerMiddleware(err, req, res, next) {
    console.error("Ha habido un error!!");
    res.status(500).json({
        error: "Ups! ha pasado algo: " + err
    })
}

app.use(errorHandlerMiddleware);


app.listen(PORT, () => {
    console.log(chalk.blue("server levantado"))
    console.log(chalk.blue("http://127.0.0.1:" + PORT))
})