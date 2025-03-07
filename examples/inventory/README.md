# Inventory

Este ejemplo, añade persistencia a lo que hasta hoy se ha hecho con datos en memoria.

Se hará el CRUD sobre un inventario.

## Persitstencia

Se utiliza una base de datos [SQLite](https://www.sqlite.org/).

Para editar y acceder a la base de datos se utiliza una extensión de VSCode [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite).

Para conectarse a la base de datos dentro de nuestra aplicación se utiliza el paquete npm [better-sqlite3](https://www.npmjs.com/package/better-sqlite3). La documentación está disponible [aquí](https://github.com/WiseLibs/better-sqlite3/blob/HEAD/docs/api.md).

En la carpeta `data` está disponible la base de datos: `db.sqlite` y el fichero sql para crear la base de datos desde 0: `seed.sql`
