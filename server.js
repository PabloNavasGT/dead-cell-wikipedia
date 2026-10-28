const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/database');
const wikiRoutes = require('./routes/wikiRoutes'); // Importar las rutas de la API

// Configurar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Conectar a MongoDB
connectDB();

// 1. Montar las rutas de la API de la Wiki
app.use('/api/wiki', wikiRoutes);

// 2. Servir archivos estáticos (HTML, CSS, imágenes, videos) desde la raíz del proyecto
app.use(express.static(path.join(__dirname)));

// Ruta raíz opcional (si quieres que redirija al index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Definir el puerto del servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor y Wiki de Dead Cells corriendo en http://localhost:${PORT}`);
});