'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // permitira crear objetos de tipo esquema

var ProductoSchema = Schema({
	nombre:String,
	descripcion:String,
	talla:String,
    material:String,
	envioInternacional:String,
	precioCompra:Number,
	precioVenta:Number,
    cantidad:Number,
	descripcion1:String,
	descripcion2:String,
	descripcion3:String,
	imagen:String,
	user: {type: Schema.ObjectId, ref:'User'},
	proveedor: {type: Schema.ObjectId, ref:'Proveedor'}
});

module.exports = mongoose.model('Producto',ProductoSchema);