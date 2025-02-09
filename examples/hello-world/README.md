# Hello world api

Ejemplo extraído de https://expressjs.com/en/starter/hello-world.html pero utilizando ecmamodules (import) en lugar de commonjs (require)

```diff
- const express = require('express')
+ import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Instalación

```bash
npm i
```

## Ejecución en modo desarrollo 

Se está usando nodemon para mejorar la experiecia de desarrollo

```bash
npm run dev
```

## Ejecución en modo producción

```bash
npm run start
```


