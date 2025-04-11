para que functione tienes que crear un archivo secrets.js en la raiz del proyecto y poner esto;

```js
// Secret key para firmar JWTs
const SECRET_KEY = "pon tu clave aqui";
```

para que esto funcione necesitas un .env con las siguiente keys:

SECRET_KEY="atat!!"
MAS="atat"
TODOS="aatat"
