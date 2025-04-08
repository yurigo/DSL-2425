//const { buildSchema } = require('graphql');
import { buildSchema } from "graphql";
//const { createHandler } = require('graphql-http/lib/use/express');
import { createHandler } from "graphql-http/lib/use/express";
//const express = require('express');
import express from "express";
//const { ruruHTML } = require('ruru/server');
import { ruruHTML } from "ruru/server";

import { typedefs } from "./typedefs.js";
import { resolvers } from "./resolvers.js";

import { makeExecutableSchema } from "@graphql-tools/schema";

// Construct a schema, using GraphQL schema language
// const schema = buildSchema(typedefs);

const schema = makeExecutableSchema({
  typeDefs: typedefs,
  resolvers: resolvers,
});

const app = express();

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
  })
);

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.get("/users" /*---*/);

// Start the server at port
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
