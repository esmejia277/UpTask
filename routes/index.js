const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projectsController');

module.exports = () => {
  router.get('/', projectsController.projectsHome);
  
  return router;
}