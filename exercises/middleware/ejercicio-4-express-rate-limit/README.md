# Ejercicio 04: Limitar las peticiones (Rate Limiting)

Crea una API REST que permita realizar peticiones a una ruta para obtener la hora actual (HH:mm:ss). Para evitar abusos, implementa un middleware que limite a un máximo de 5 peticiones por minuto por dirección IP.