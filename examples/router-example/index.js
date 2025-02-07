import chalk from 'chalk';
import express from 'express';

import { routerStudents } from './students.router.js';
import { routerClasses } from './classes.router.js';

const app = express()
const port = 3000

app.use("/students", routerStudents);
app.use("/classes", routerClasses);

app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
  console.log(chalk.yellow(`Example app listening on port http://127.0.0.1:${port}`))
  console.log(chalk.yellow(`http://127.0.0.1:${port}/students`))
})

