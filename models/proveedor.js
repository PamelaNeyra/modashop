'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // permitira crear objetos de tipo esquema

var ProveedorSchema = Schema({
	nombre:String,
	tipo:String,
	celular:String,
	email:String,
	direccion:String,
	descripcion:String,
	imagen:String,
	user: {type: Schema.ObjectId, ref:'User'}

});

module.exports = mongoose.model('Proveedor',ProveedorSchema);