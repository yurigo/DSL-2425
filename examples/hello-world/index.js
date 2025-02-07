import chalk from 'chalk';
import express from 'express';

import { pokemons } from './pokemons.js';

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.bgGreen.greenBright('Hello world!'));
// console.log(chalk.red('Hello world!'));
// console.log(chalk.yellow('Hello world!'));

const app = express()
const port = 3000

// function f1(request, response){
//     response.send("hello world");
// }

// const f2 = function (request, response){
//     response.send("hello world");
// }

// const f3 = (request, response) => {
//     response.send("hello world");
// }


app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/ping', (req, res) => {
    res.send("pong");
})

app.get('/pokemon', (req, res) => {
    res.json(pokemons);
})

app.get('/pokemon/:ID', (req, res) => {

    const id = parseInt(req.params.ID);

    const pokemon = pokemons.find((elem) => {
        return (elem.id === id)
    })

    res.json(pokemon)
})

app.listen(port, () => {
  console.log(chalk.yellow(`Example app listening on port ${port}`))
})

