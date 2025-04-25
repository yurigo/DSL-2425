import { createHandler } from "graphql-http/lib/use/express";

import express from "express";
import cors from "cors";

import { ruruHTML } from "ruru/server";
import { typedefs } from "./typedefs.js";
import { resolvers } from "./resolvers.js";

import { makeExecutableSchema } from "@graphql-tools/schema";

import userRouter from "./router/user.router.js";
import docsRouter from "./router/docs.router.js";

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

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/docs", docsRouter);

// Start the server at port
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
