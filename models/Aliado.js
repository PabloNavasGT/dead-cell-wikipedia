const mongoose = require('mongoose');

const aliadoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    extra: { type: String, default: '' },
    imagen: { type: String }
}, { collection: 'aliados' });

module.exports = mongoose.model('Aliado', aliadoSchema);