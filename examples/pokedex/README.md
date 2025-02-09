# Pokedex

Crea una api que tenga un endpoint que permita mostrar todos los pokemon en formato json. Y tantos otros endpoint como pokemon existan que muestre la información de cada uno de ellos (también en formato json).

por ejemplo:

- `/pokemon`

```json
[
    {
        id: 1,
        name: "bulbasur",
        type: "leaf"
    },
    {
        id: 2,
        name: "ivysaur",
        type: "leaf"
    },
    {
        id: 3,
        name: "venusaur",
        type: "leaf"
    },
    {
        id: 4,
        name: "charmander",
        type: "fire"
    }
]
```

- `pokemon/1`

```json
    {
        id: 1,
        name: "bulbasur",
        type: "leaf"
    }
```

- `pokemon/4`

```json
    {
        id: 4,
        name: "charmander",
        type: "fire"
    }
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