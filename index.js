'use strict'

var mongoose = require('mongoose');

var app = require('./app');
var port = process.env.PORT || 3977; // PUERTO QUE TENDRA NUESTRO SERVIDOR WEB  DEL BACKEND

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:Prueba$1@clusterne-shard-00-00-np7qt.mongodb.net:27017,clusterne-shard-00-01-np7qt.mongodb.net:27017,clusterne-shard-00-02-np7qt.mongodb.net:27017/db_fisol?ssl=true&replicaSet=ClusterNE-shard-0&authSource=admin&retryWrites=true&w=majority', (err,res)=>{
//mongoose.createConnection('mongodb://localhost:27017/evaluacionDB', (err,res)=>{

//mongoose.connect('mongodb://localhost:27017/proyectoIhcDB', (err,res)=>{
	if(err){ 
		console.log('error en la conexion');
		throw err;
		console.log(err);
	}else{

		console.log("La conexión a la base de datos está funcionando correctamente..");

		app.listen(port,function(){
			console.log("Servidor del api rest escuchando en http://localhost:"+port);
		});
	}
});
