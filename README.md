# DSL-2425

## Node & mdn

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
- http://localhost:3300/user

#### Request

a completar

#### Response

acompletar

#### Métodos HTTP

GET
POST
PUT
DELETE

### Consumo de API

#### Herramientas para hacer peticiones

curl
Browser para hacer GET (por defecto)
Postman
Thunder Client

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

## Ejercicios

Crea una API que devuelva un JSON con:

- un array con los nombres de todos los alumnos inscritos en DSL.
- número total de alumnos inscritos en DSL.

## Express

### Routes

#### Ejercicio 01

Crea una API REST donde podremos realizar varias peticiones:

Una petición para obtener la fecha actual en milisegundos.
Otra petición para obtener la fecha actual en formato “dd-MM-yyyy”.
Y otra petición para obtener la hora actual en formato “hh:mm:ss”

#### Ejercicio 02

Crea una API REST donde podremos realizar una petición por cada número del 2 al 5 y devuelva la tabla de multiplicar del número correspondiente.
