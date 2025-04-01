import express from 'express'; // ⚠️ npm i express
import jwt from 'jsonwebtoken';  // ⚠️ npm i jsonwebtoken

const app = express();
const port = 3000;

// Secret key para firmar JWTs
const SECRET_KEY = 'CLAVE_SECRETA_PARA_FIRMAR_JWT_NO_COMPARTIR_NUNCA_CON_NADIE!!';

// Middleware para verificar el Bearer Token
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ message: 'Authorization header is required' });
  }

  // El token Bearer está después de "Bearer " en el encabezado
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token is required' });
  }

  jwt.verify(token, SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = payload;
    next();
  });
};

// Ruta pública, no requiere autenticación
app.get('/public', (req, res) => {
  res.json({ message: 'This is a public route. No authentication required.' });
});

// Ruta para iniciar sesión y generar un token Bearer
app.post('/login', express.json(), (req, res) => {
  const { username, password } = req.body;

  // Simulación de verificación de usuario
  if (username === 'demo' && password === 'p@55w0rd') {
    const user = { username };
    const accessToken = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
    res.json({ accessToken });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Ruta protegida, requiere autenticación Bearer
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route. You are authenticated!', user: req.user });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});