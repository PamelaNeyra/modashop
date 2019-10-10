'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // permitira crear objetos de tipo esquema

var UsuarioSchema = Schema({
	dni: Number,
	nombres: String,
	apePaterno: String,
	apeMaterno: String,
	direccion: String,
	ciudad: String,
	estadoCivil: String,
	telefono: String,
	email: String,
	password: String,
	role: String,
	imagen: String,
	estado: {
		type: String,
		default: "Activo"
	}
});

module.exports = mongoose.model('User', UsuarioSchema);