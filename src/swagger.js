const swaggerAutogen = require('swagger-autogen')();

// Konfiguration für die Swagger-Dokumentation
const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:3000'
};

// Dateipfad für die Ausgabedatei der Swagger-Dokumentation
const outputFile = './swagger-output.json';
const routes = ['./server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
