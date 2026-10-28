const mongoose = require('mongoose');

const monstruoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    extra: { type: String, default: '' },
    imagen: { type: String }
}, { collection: 'monstruo' }); // Asegura que apunte a la colección 'monstruos'

module.exports = mongoose.model('Monstruo', monstruoSchema);