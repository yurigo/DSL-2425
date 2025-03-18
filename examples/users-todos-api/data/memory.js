import { nanoid } from "nanoid";

const seed = () => {
  const alice = {
    id: "zQrrJuA14fz123PeUTPmd",
    name: "Alice",
    age: 30,
  };

  const bob = {
    id: nanoid(),
    name: "Bob",
    age: 40,
  };

  const charlie = {
    id: nanoid(),
    name: "Charlie",
    age: 99,
  };

  const todos = [
    {
      id: nanoid(),
      text: "npm init -y",
      done: true,
      userID: alice.id,
    },
    {
      id: nanoid(),
      text: "npm install nodemon -D",
      done: false,
      userID: alice.id,
    },
    {
      id: nanoid(),
      text: "npm i express",
      done: true,
      userID: alice.id,
    },
    {
      id: nanoid(),
      text: "npm i chalk",
      done: true,
      userID: alice.id,
    },
    {
      id: nanoid(),
      text: "npm run dev",
      done: true,
      userID: alice.id,
    },
    {
      id: nanoid(),
      text: "leche",
      done: true,
      userID: bob.id,
    },
    {
      id: nanoid(),
      text: "galletas",
      done: true,
      userID: bob.id,
    },
    {
      id: nanoid(),
      text: "huevos",
      done: false,
      userID: bob.id,
    },
    {
      id: nanoid(),
      text: "pollo",
      done: true,
      userID: bob.id,
    },
    {
      id: nanoid(),
      text: "squirtle",
      done: true,
      userID: charlie.id,
    },
    {
      id: nanoid(),
      text: "charizard",
      done: false,
      userID: charlie.id,
    },
    {
      id: nanoid(),
      text: "bulbasaur",
      done: true,
      userID: charlie.id,
    },
    {
      id: nanoid(),
      text: "pikachu",
      done: true,
      userID: charlie.id,
    },
    {
      id: nanoid(),
      text: "eevee",
      done: true,
      userID: charlie.id,
    },
  ];

  return {
    users: [alice, bob, charlie],
    todos,
  };
};

export const { users, todos } = seed();
