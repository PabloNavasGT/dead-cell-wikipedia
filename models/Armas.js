const mongoose = require('mongoose');

const armaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    dondeConseguirLo: {
        descripcion: { type: String },
        imagen: { type: String }

    },

    especialidades: { 
        type: [String], 
        required: true,
        enum: ['brutalidad', 'estrategia', 'supervivencia']
    },
    rareza: { type: String, enum: ['sangriento', 'DLC'] },
    extra: { type: String, default: '' },
    imagen: { type: String },
    video: { type: String }
}, { collection: 'armas' });

module.exports = mongoose.model('Arma', armaSchema);