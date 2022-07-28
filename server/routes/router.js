const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require('../controller/controller')
route.get("/", services.homeRoutes);

route.get("/add-command", services.add_command);

route.get("/update-command", services.update_command);

// API
route.post('/api/commands',controller.create);
route.get('/api/commands',controller.find);
route.put('/api/commands/:id',controller.update);
route.delete('/api/commands/:id',controller.delete);
module.exports = route;
