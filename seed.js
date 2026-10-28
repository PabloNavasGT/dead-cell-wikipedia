const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Importaciones limpias de cada modelo por separado
const Monstruo = require('../models/Mountruo');        // Coincide con Mountruo.js
const Aliado = require('../models/Aliado');            // Coincide con Aliado.js
const Arma = require('./models/Armas');               // Coincide con Armas.js
const ArmaColaboracion = require('./models/ArmaColaboracion'); // Coincide con ArmaColaboracion.js
const Recurso = require('./models/Recursos');         // Coincide con Recursos.js
const Atuendo = require('./models/Atuendo');          // Coincide con Atuendo.js
const AtuendoColaborativo = require('./models/AtuendoColaborativo'); // Coincide con AtuendoColaborativo.js
const Jefe = require('./models/Jefes');

dotenv.config();
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dead_cells';

const ejecutarSeed = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('📦 Conectado a MongoDB para poblar colecciones con sus estéticas...');

        // 1. Monstruos
        await Monstruo.deleteMany();
        await Monstruo.create({
            nombre: 'Murciélago',
            descripcion: 'Su única meta es explotar en tu cara.',
            extra: 'Suelen aparecer en pasillos estrechos.',
            imagen: '../imagenes/murcielago.jpeg',
            claseCss: 'monstruos' // Estética aplicada
        });

        // 2. Aliados
        await Aliado.deleteMany();
        await Aliado.create({
            nombre: 'El Coleccionista',
            descripcion: 'Es un tipo con una jeringa gigante y obsesión por las Células.',
            extra: 'Te espera al final de cada bioma.',
            imagen: '../imagenes/coleccionista.png',
            claseCss: 'aliado' // Estética aplicada
        });

        // 3. Armas
        // Ejemplo de inserción en seed.js
        await Arma.deleteMany();
        await Arma.create([
            {
                nombre: 'Espada Maestra',
                descripcion: 'El arma con más daño del juego.',
                especialidades: ['brutalidad'], // 1 especialidad
                dondeConseguirLo: { descripcion: 'La suelta el jefe Conjuntivius.' },
                rareza: 'sangriento',
                extra: 'Poder absoluto en un filo de cristal.',
                imagen: '../imagenes/espadamaldita.jpeg'
            },
           
        ]);

        // 4. Armas de Colaboración
        await ArmaColaboracion.deleteMany();
        await ArmaColaboracion.create({
            nombre: 'Sartén',
            descripcion: 'Dos sartenes unidas por una cadena.',
            especialidades: ['brutalidad', 'supervivencia'],
            dondeConseguirLo: {
                descripcion: 'Se encuentra en una sala especial de lore.',
                imagen: '../imagenes/sarten.jpeg'
            },
            rareza: 'colaborativa',
            extra: 'El fuego de la cocina es la mejor enmienda.',
            imagen: '../imagenes/sarten.jpeg',
            video: '../video/vida y muerte.mp4',
            claseCss: 'armas-colaborativo' // Estética aplicada
        });

        // 5. Recursos
        await Recurso.deleteMany();
        await Recurso.create({
            nombre: 'Oro (Monedas)',
            descripcion: 'El recurso más común para comprar equipo.',
            dondeConseguirLo: {
                descripcion: 'Se obtiene al derrotar monstruos o vender equipo.',
                imagen: '../imagenes/monedota.png'
            },
            extra: 'Brilla en la oscuridad.',
            imagen: '../imagenes/monedota.png',
            claseCss: 'recursos' // Estética aplicada
        });

        // 6. Atuendos
        await Atuendo.deleteMany();
        await Atuendo.create({
            nombre: 'Atuendo de Salamandra',
            descripcion: 'Traje naranja brillante que imita la piel de los anfibios.',
            dondeConseguirLo: {
                descripcion: 'Lo sueltan las Salamandras en las Cavernas.',
                imagen: '../imagenes/lagarto.png'
            },
            rareza: 'avanzado',
            extra: 'Si me tocas te quemas.',
            imagen: '../imagenes/lagarto.png',
            claseCss: 'aspectos-avanzado' // Estética aplicada
        });

        // 7. Atuendos Colaborativos
        await AtuendoColaborativo.deleteMany();
        await AtuendoColaborativo.create({
            nombre: 'Atuendo del Penitente (Blasphemous)',
            descripcion: 'El imponente Capirote de Blasphemous con espinas.',
            extra: 'Culpa sagrada...',
            imagen: '../imagenes/balfemia.jpeg',
            imagenSecundaria: '../imagenes/blasphemous.avif',
            claseCss: 'aspectos-colaborativo' // Estética aplicada
        });

        // 8. Jefes
        await Jefe.deleteMany();
        await Jefe.create({
            nombre: 'El Conserje',
            nivelDificultad: 7, // Número primo validado
            descripcion: 'Jefe de los guardias de la Prisión consumido por el Malestar.',
            acertijo: 'Un eco de hierro en la celda sombría...',
            consejosParaDerrotarlo: 'Cuidado con su onda de choque y salta.',
            imagen: '../imagenes/conserje.jpeg',
            claseCss: 'jefe' // Estética aplicada
        });

        console.log('✅ ¡Colecciones independientes creadas, pobladas y conectadas con sus estéticas con éxito!');
        process.exit();
    } catch (error) {
        console.error('❌ Error al poblar las colecciones:', error.message);
        process.exit(1);
    }
};

ejecutarSeed();