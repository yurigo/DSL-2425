# DSL-2425

## Node & npm

## Javascript (ECMA16)

## API

### API RPC

- Remote Procedure Call

https://es.wikipedia.org/wiki/Llamada_a_procedimiento_remoto

### API REST

- REpresentational State Transfer

https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional

### RPC vs REST

RPC -> programación imperativa / funcional.
REST -> Programación orientada a objetos.

| RPC                                                                                                                                             | REST                                               | ... |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | --- |
| <ul><li>getUser()</li><li>addUser()</li><li>removeUser()</li><li>updateUser()</li><li>getLocation()</li><li>addLocation()</li><li>...</ul></ul> | <ul><li>Usuario{}</li><li>Localizacion{}</li></ul> |

## Entendiendo las API

Una API es un conjunto de reglas y definiciones que permite que dos aplicaciones de software se comuniquen entre sí.

Actúa como un intermediario, permitiendo que una aplicación solicite información o acciones y luego reciba una respuesta

### Conceptos fundamentales

#### Enpoint

Dirección específica donde se puede acceder a ciertos datos o realizar una operación en particular.

- https://pokeapi.co/api/v2/pokemon/ditto
- http://localhost:3300/users

#### Request

a completar

#### Response

acompletar

#### Métodos HTTP

- GET
- POST
- PUT
- DELETE

### Consumo de API

#### Herramientas para hacer peticiones

- curl
- Browser para hacer GET (por defecto)
- Postman
- Thunder Client

#### Autenticación y autorización

- Autenticación: verificar si tenemos acceso
- Autorización: verificar si tenemos permisos para realizar ciertas operacions o acceso a ciertos recursos.

### Métodos, estados y convenciones

#### Métodos HTTP

GET
POST
PUT
DELETE

#### Estados HTTP

##### 2XX Respuestas existosas

- 200 OK: Solicitud exitosa
- 201 Created: Se ha creado un nuevo recurso con éxito.

##### 3XX Respuestas de redireccion

- 301 Moved Permanently
- 304 Not modified

##### 4XX Errores del cliente

- 400 BadRequest: La solicitud fue incorrecta o no puede ser procesada.
- 401 Unauthorized: La solicitud carece de credenciales válidas.
- 403 Forbidden: La solicitud carece de permisos. El servidor entiende la petición pero se niega en autorizar-la.
- 404 Not Found: El recurso solicitado no pudo ser encontrado.
- 418 I'm a teapot: El servidor se niega a preparar café porque es, de manera permanente, una tetera. (https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)

##### 5XX Errores del servidor

- 500 InternalServer Error: El servidor encontró un error y no puede completar la solicitud.

#### Convenciones

- Nomenclatura: Los nombres de los recursos deben ser sustantivos y plural.
- Versionado: incluir la versión del a api (cabecera, url, querystring).
- Filtrado, paginación y ordenación: Al recuperar listas de recursos, las API a menudo ofrecen parámetros para filtrar resultados, limitar el número de resultados y ordenarlos.

#### Javascript

- JS-modules

#### Hosting

- render

---

## [Express](https://expressjs.com/)

Express.js o simplemente Express es un entorno de trabajo para aplicaciones web en Node.js, de código abierto y con licencia MIT. Se utiliza para desarrollar aplicaciones web y APIs. El autor original es TJ Holowaychuk y la primera versión se lanzó el 2010.

```bash
npm i express
```

### Ejemplos

- [Ver Ejemplo: hello-world](./examples/hello-word)
- [Ver Ejemplo: pokedex](./examples/pokedex)
- [Ver Ejemplo: dsl-students-api](./examples/dsl-students-api)

### Router

Un objeto router es una instancia de middleware y rutas. Puedes considerarlo como una "miniaplicación", capaz únicamente de realizar funciones de middleware y enrutamiento. Cada aplicación de Express tiene un enrutador integrado.

Un router se comporta como un middleware en sí mismo, por lo que puedes usarlo como argumento en `app.use()` o como argumento en el método `use()` de otro router.

[Documentación oficial](https://expressjs.com/en/4x/api.html#router)

[Ver ejemplo: router-example](./examples/router-example)

#### Ejercicios

##### Ejercicio 01

Crea una API REST donde podremos realizar varias peticiones:

- Una petición para obtener la fecha actual en milisegundos.
- Otra petición para obtener la fecha actual en formato `dd-MM-yyyy`.
- Y otra petición para obtener la hora actual en formato `hh:mm:ss`

> [!TIP]
> - [ver solucion](./exercises/routing/ejercicio-1)
> - [ver solucion alternativa](./exercises/routing/ejercicio-1-momentjs)

##### Ejercicio 02
Crea una API REST donde podremos realizar una petición por cada número del 1 al 99 y devuelva la tabla de multiplicar del número correspondiente.

> - [ver solucion](./exercises/routing/ejercicio-2)

##### Ejercicio 03
El factorial de un número entero `n` es una operación matemática que consiste en multiplicar todos los factores `n * (n-1) * (n-2) * … * 1`. Así, el factorial de 5 (escrito como 5!) es igual a: `5! = 5 * 4 * 3 * 2 * 1 = 120`.

> [!TIP]
> - [ver solucion](./exercises/routing/ejercicio-3)

Crea una API REST donde el usuario podrá enviar por parámetro GET, después de la URL, un número y devuelva el factorial de ese número.

##### Ejercicio 04
Crea una API REST donde podremos realizar una sola petición para realizar las operaciones de suma, resta, multiplicación y división.

En la petición, deberemos enviar por parámetro (dentro de la URL) la operación a realizar, por el body de la petición enviaremos 2 números, y se debe enviar usando el método POST.

Ten en cuenta que, si el divisor de la división es 0, no se podrá dividir y el servidor debe mostrar un mensaje de error con el estado 422 (“Unprocessable Entity”), que significa que el servidor entiende la petición, pero no puede procesar las instrucciones que recibe.

##### Ejercicio 05
Crea una API REST que permita convertir temperaturas:

Una ruta recibirá una temperatura en grados Celsius como parámetro en la URL y devolverá su equivalente en Fahrenheit y Kelvin.
Otra ruta recibirá una temperatura en grados Fahrenheit y devolverá su equivalente en Celsius y Kelvin.

##### Ejercicio 06
Crea una API REST que reciba un número entero como parámetro en la URL y devuelva si es un número primo o no.

##### Ejercicio 07
Crea una API REST que reciba una palabra como parámetro en la URL y devuelva si es un palíndromo (se lee igual al derecho y al revés).

##### Ejercicio 08
Crea una API REST que reciba un número como parámetro en la URL y devuelva su representación en número romano.

##### Ejercicio 09
Crea una API REST que permita generar contraseñas aleatorias.

##### Ejercicio 10
Crea una API REST que reciba una frase como parámetro en la URL y devuelva un análisis de la misma, incluyendo:

- Número de palabras
- Número de caracteres (sin contar espacios)
- Número de vocales y consonantes
- La palabra más larga


La ruta recibirá como parámetros en la URL la longitud de la contraseña y si debe incluir números y caracteres especiales.
La API devolverá una contraseña aleatoria con las características solicitadas.


### Middleware

- https://expressjs.com/en/guide/writing-middleware.html
- https://expressjs.com/en/guide/using-middleware.html

#### Route middleware

#### Router middleware

#### Application middleware

#### Error middleware

#### Ejercicios

##### Ejercicio 01
Crea una API REST donde podremos realizar una petición para obtener un número aleatorio del 1 a un número recibido por parámetro.

Comprueba que el número recibido por parámetro sea superior o igual a 1, usando un middleware.

##### Ejercicio 02
Crea una API REST donde podremos realizar una petición para obtener la siguiente combinación de números, multiplicada por un número enviado por el body y con el método PUT.

```
[2,4,8,9,7,3,5,6]
```

Para poder acceder a esta petición, se debe comprobar a través de un middleware que el usuario envía en la petición el string “mi-credencial”. Si no lo envía, no se podrá enviar la combinación de números.

##### Ejercicio 03: Comprobación de tipo de dato en el cuerpo de la solicitud (Body Validation)

Crea una API REST que reciba una petición POST con un cuerpo que contenga un objeto JSON. Este objeto debe tener las propiedades nombre (de tipo string) y edad (de tipo número).

Asegúrate de que:

El campo nombre sea de tipo string y no esté vacío.
El campo edad sea un número entero positivo mayor que 0.
Si alguno de estos requisitos no se cumple, devuelve un mensaje de error y un código de estado adecuado usando un middleware.

##### Ejercicio 04: Limitar las peticiones (Rate Limiting)

Crea una API REST que permita realizar peticiones a una ruta para obtener la hora actual. Para evitar abusos, implementa un middleware que limite a un máximo de 5 peticiones por minuto por dirección IP.

##### Ejercicio 05: Middleware para logueo de peticiones (Logging)

Crea una API REST donde cada vez que se haga una petición a cualquier ruta, se registre en la consola la información sobre la solicitud (método HTTP, ruta, y la fecha y hora).

Este middleware debería ser aplicable a todas las rutas, y deberá imprimirse cada vez que se haga una solicitud, independientemente de la ruta que sea.

##### Ejercicio 06: Middleware para verificar si el usuario está autenticado (Authentication)

Crea una API REST con una ruta protegida que devuelva información sensible, como un perfil de usuario. Antes de acceder a esa ruta, debes verificar si el usuario está autenticado. La autenticación se puede simular con un token enviado en los encabezados de la petición. Si no se incluye un token válido, la API debe responder con un mensaje de error.

Usa un middleware para esta verificación.

##### Ejercicio 07: Middleware para transformar la respuesta de la API (Response Transformation)

Crea una API REST que devuelva un objeto con información de usuario (por ejemplo, nombre, edad y país). Luego, crea un middleware que transforme la respuesta antes de enviarla al cliente. La transformación consiste en agregar un campo extra, como timestamp, que sea la fecha y hora en que se generó la respuesta.

##### Ejercicio 08: Contador de visitas por ruta

Crea una API REST con diferentes rutas. Crea un middleware que cuente cuántas veces se ha accedido a cada ruta y almacene ese contador en memoria. Al final de cada solicitud, muestra en la consola el número total de visitas a esa ruta.  Habilita, también una ruta `visitas` que devuelva un json con el listado de los endpoint y el número de visitas. 

> [!TIP]
> - [Ver solución](./exercises/middleware/ejercicio-8)

##### Ejercicio 09: Comprobación de headers personalizados

Crea una API REST que solo permita peticiones que incluyan un encabezado personalizado x-api-key. Si la petición no incluye este encabezado o el valor del encabezado no coincide con una clave predefinida, la API debe devolver un mensaje de error con el código de estado adecuado.

##### Ejercicio 10: Middleware de validación de parámetros numéricos

Crea una API REST donde puedas realizar una petición GET con parámetros de la URL como num1 y num2, que sean números enteros. Antes de procesar la solicitud, usa un middleware que valide que ambos parámetros son números enteros. Si alguno de ellos no es válido, devuelve un error.

> [!TIP]
> - [Ver solución](./exercises/middleware/ejercicio-10)
> - [Ver solución (con joi)](./exercises/middleware/ejercicio-10-joi)