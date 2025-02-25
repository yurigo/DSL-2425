# Ejercicio 03: Comprobación de tipo de dato en el cuerpo de la solicitud (Body Validation)

Crea una API REST que reciba una petición POST con un cuerpo que contenga un objeto JSON. Este objeto debe tener las propiedades nombre (de tipo string) y edad (de tipo número).

Asegúrate de que:

El campo nombre sea de tipo string y no esté vacío.
El campo edad sea un número entero positivo mayor que 0.
Si alguno de estos requisitos no se cumple, devuelve un mensaje de error y un código de estado adecuado usando un middleware.