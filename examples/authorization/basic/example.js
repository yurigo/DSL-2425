import express from 'express'; // ⚠️ npm i express

const app = express();
const port = 3000;

// Función para decodificar el header 'Authorization: Basic'
const basicAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  // Verificar que el encabezado tiene el prefijo 'Basic'
  const auth = authHeader.split(' ');

  if (auth[0] !== 'Basic' || auth.length !== 2) {
    return res.status(401).json({ message: 'Invalid authorization format' });
  }

  // Decodificar el valor base64
  const decoded = Buffer.from(auth[1], 'base64').toString('utf8');
  const [username, password] = decoded.split(':');

  // Verificar las credenciales
  if (username === 'demo' && password === 'p@55w0rd') {
    next(); // Las credenciales son correctas, continuar con la ruta
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Ruta protegida por autenticación básica
app.get('/protected', basicAuth, (req, res) => {
  res.json({ message: 'You have access to this protected route!' });
});

// Ruta pública para probar
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the public route' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/**
 * Para probar el endpoint privado: 
 * 
 * curl -H "Authorization: Basic ZGVtbzpwQDU1dzByZA==" http://localhost:3000/protected
 * 
 * El valor ZGVtbzpwQDU1dzByZA== es la cadena codificada en base64 de demo:p@55w0rd.
 */