// Require de Express
const express = require('express');

// Ejecución de Express
const app = express();

// Requiere path
const path = require('path');

// Usando recursos estáticos.
app.use(express.static('public'));

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

/*
    ** RUTAS A LOS RECURSOS **
*/

// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
	res.sendFile(path.resolve('./views/index.html'));
});


// Ruta 404 ¿?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});