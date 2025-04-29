// server.js
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour servir les fichiers statiques du build
app.use(express.static(path.join(__dirname, 'dist')));

// Pour toutes les autres routes, servir index.html
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server address: http://localhost:${PORT}`);
});