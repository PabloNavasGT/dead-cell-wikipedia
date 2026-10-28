const mongoose = require('mongoose');

const armaColabSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    dondeConseguirLo: {
        descripcion: { type: String },
        imagen: { type: String }
    },
    rareza: { type: String, enum: ['colaborativa'], default: 'colaborativa' },
    extra: { type: String, default: '' },
    imagen: { type: String },
    video: { type: String }
}, { collection: 'armas_colaboracion' });

module.exports = mongoose.model('ArmaColaboracion', armaColabSchema);