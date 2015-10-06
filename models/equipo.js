// Dependecies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var equipoSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

// Return model
module.exports = restful.model('Equipo',equipoSchema);
