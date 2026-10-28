const mongoose = require('mongoose');

const recursoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    dondeConseguirLo: {
        descripcion: { type: String },
        imagen: { type: String }
    },
    extra: { type: String, default: '' },
    imagen: { type: String },
    claseCss: { type: String, default: 'recursos' } // <--- Añadido aquí
}, { collection: 'recursos' });

module.exports = mongoose.model('Recurso', recursoSchema);