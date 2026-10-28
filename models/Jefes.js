const mongoose = require('mongoose');

const jefeSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    nivelDificultad: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                if (v <= 1) return false;
                for (let i = 2; i <= Math.sqrt(v); i++) {
                    if (v % i === 0) return false;
                }
                return true;
            },
            message: props => `${props.value} no es un número primo válido para la dificultad del jefe.`
        }
    },
    descripcion: { type: String, required: true },
    acertijo: { type: String },
    consejosParaDerrotarlo: { type: String },
    imagen: { type: String }
}, { collection: 'jefes' });

module.exports = mongoose.model('Jefe', jefeSchema);