const express = require('express');
const routes = require('./routes');

// create app
const app = express();
app.use('/', routes() );





app.listen(3000);