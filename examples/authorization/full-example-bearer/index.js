import "dotenv/config";

import express from "express"; // ⚠️ npm i express
import jwt from "jsonwebtoken"; // ⚠️ npm i jsonwebtoken
import morgan from "morgan";
import helmet from "helmet";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import { all, add, get } from "./users.js";

const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(helmet());

// Middleware para verificar el Bearer Token
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res
      .status(403)
      .json({ message: "Authorization header is required" });
  }

  // El token Bearer está después de "Bearer " en el encabezado
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Token is required" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = payload;
    next();
  });
};

// Ruta pública, no requiere autenticación
app.get("/public", (req, res) => {
  res.json({ message: "This is a public route. No authentication required." });
});

app.post("/users", express.json(), (req, res) => {
  const { username, password } = req.body;

  // coger el password y hashearlo con bcryptjs
  // const bcrypt = require('bcrypt');
  const saltRounds = 11;
  const myPlaintextPassword = password;

  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    // Store hash in your password DB.

    const newUser = {
      id: nanoid(),
      name: username,
      hash: hash,
    };

    // guardarlo en base de datos
    add(newUser);

    res.status(201).json({ message: "user created" });
  });
});

// Ruta para iniciar sesión y generar un token Bearer
app.post("/login", express.json(), (req, res) => {
  const { username, password } = req.body;

  // ir a la base de datos y buscar el user con username y password
  const foundUser = get(username);

  // if (!foundUser) return next("error_login");
  if (!foundUser) {
    return res.status(404).json({ error: "not found" });
  }

  bcrypt.compare(password, foundUser.hash, function (err, result) {
    // result == true
    //if (err) return next("error_login");
    if (err) {
      return res.status(404).json({ error: "not found" });
    }

    if (!result) {
      return res.status(404).json({ error: "not found" });
    }

    const tosend = {
      id: foundUser.id,
      name: foundUser.name,
    };

    // aqui todo bien!
    const accessToken = jwt.sign(tosend, process.env.SECRET_KEY, {
      expiresIn: "10s",
    });

    res.json({ accessToken });
  });
});

// Ruta protegida, requiere autenticación Bearer
app.get("/protected", authenticateJWT, (req, res) => {
  res.json({
    message: "This is a protected route. You are authenticated!",
    user: req.user,
  });
});

app.get("/users", (req, res) => {
  console.log(all());
  res.json(all());
});

app.get("/", (req, res) => {
  res.json({
    public: `http://localhost:${port}/public`,
    protected: `http://localhost:${port}/protected`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/users`);
});
