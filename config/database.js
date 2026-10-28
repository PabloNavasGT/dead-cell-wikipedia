const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Lee la URI desde el archivo .env o usa una por defecto
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dead_cells');
        console.log(`[MongoDB Connected]: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error de conexión a MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;