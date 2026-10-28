const Monstruo = require('../models/Mountruo');
const Aliado = require('../models/Aliado');
const Arma = require('../models/Armas');
const ArmaColaboracion = require('../models/ArmaColaboracion');
const Recurso = require('../models/Recursos');
const Atuendo = require('../models/Atuendo');
const AtuendoColaborativo = require('../models/AtuendoColaborativo');
const Jefe = require('../models/Jefes');

// Controladores individuales por colección
exports.getMonstruos = async (req, res) => {
    try { const data = await Monstruo.find(); res.json({ success: true, data }); } 
    catch (e) { res.status(500).json({ success: false, error: e.message }); }
};

exports.getAliados = async (req, res) => {
    try { const data = await Aliado.find(); res.json({ success: true, data }); } 
    catch (e) { res.status(500).json({ success: false, error: e.message }); }
};

exports.getArmas = async (req, res) => {
    try { const data = await Arma.find(); res.json({ success: true, data }); } 
    catch (e) { res.status(500).json({ success: false, error: e.message }); }
};

exports.getArmasColaboracion = async (req, res) => {
    try { const data = await ArmaColaboracion.find(); res.json({ success: true, data }); } 
    catch (e) { res.status(500).json({ success: false, error: e.message }); }
};

exports.getRecursos = async (req, res) => {
    try { const data = await Recurso.find(); res.json({ success: true, data }); } 
    catch (e) { res.status(500).json({ success: false, error: e.message }); }
};

exports.getAtuendos = async (req, res) => {
    try { const data = await Atuendo.find(); res.json({ success: true, data }); } 
    catch (e) { res.status(500).json({ success: false, error: e.message }); }
};

exports.getAtuendosColaborativos = async (req, res) => {
    try { const data = await AtuendoColaborativo.find(); res.json({ success: true, data }); } 
    catch (e) { res.status(500).json({ success: false, error: e.message }); }
};

exports.getJefes = async (req, res) => {
    try { const data = await Jefe.find(); res.json({ success: true, data }); } 
    catch (e) { res.status(500).json({ success: false, error: e.message }); }
};