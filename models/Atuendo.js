const mongoose = require('mongoose');

const atuendoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    dondeConseguirLo: {
        descripcion: { type: String },
        imagen: { type: String }
    },
    rareza: { type: String, enum: ['basico', 'avanzado', 'legendario', 'colaborativo'] },
    extra: { type: String, default: '' },
    imagen: { type: String }
}, { collection: 'atuendos' });

module.exports = mongoose.model('Atuendo', atuendoSchema);