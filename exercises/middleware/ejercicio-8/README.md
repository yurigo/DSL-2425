# Ejercicio 08: Contador de visitas por ruta


Crea una API REST con diferentes rutas. Crea un middleware que cuente cuántas veces se ha accedido a cada ruta y almacene ese contador en memoria. Al final de cada solicitud, muestra en la consola el número total de visitas a esa ruta. Habilita, también una ruta visitas que devuelva un json con el listado de los endpoint y el número de visitas.


## Ejemplo

### Requests
```
GET /hola
GET /hola
GET /hola
```

```
GET /hello
GET /hello
```

```
GET /hallo
```

```
GET /visitas
```


### Response
```json
{
    "/hola" : 3,
    "/hello" : 2,
    "/hallo" : 1,
}
```