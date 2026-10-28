const mongoose = require('mongoose');

const atuendoColabSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    extra: { type: String, default: '' },
    imagen: { type: String },
    imagenSecundaria: { type: String }
}, { collection: 'atuendos_colaborativos' });

module.exports = mongoose.model('AtuendoColaborativo', atuendoColabSchema);