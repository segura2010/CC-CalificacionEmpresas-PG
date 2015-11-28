
// DB Libs 
var pg = require('pg');
var pgClient = null;

var PGDB = process.env.PGDB;

pg.connect(PGDB, function(err, client, done) {
	if(err)
	{
		console.log("[!] No se pudo conectar a la BD");
		return process.exit();
	}

	pgClient = client;

	Empresa = new (require('./lib/Empresa')).EmpresaControlador(pgClient);

});


var Empresa = null;
//var Usuario = new (require('./lib/Usuario')).UsuarioControlador(pgClient);


var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// Por simplicidad para probar todo se hace por GET
app.get('/empresa/add/:nombre', function( req, response ) {
	// creamos la nueva empresa en la BD
	Empresa.add(req.params.nombre, function(err, r){
		if(err)
		{
			response.status(500).send(err);
		}
		else
		{
			response.send(r);
		}
	});
});

app.get('/empresa/delete/:id', function( req, response ) {
	// creamos la nueva empresa en la BD
	Empresa.delete(req.params.id, function(err, r){
		if(err || !r)
		{
			response.status(500).send(err);
		}
		else
		{
			response.send({"code":0});
		}
	});
});

app.get('/empresa/update/:id/:nombre', function( req, response ) {
	// creamos la nueva empresa en la BD
	Empresa.update(req.params.id, req.params.nombre, function(err, r){
		if(err || !r)
		{
			response.status(500).send(err);
		}
		else
		{
			response.send({"code":0});
		}
	});
});

app.get('/empresas', function(request, response) {
	Empresa.list(function(err, r){
		if(err)
		{
			response.status(500).send(err);
		}
		else
		{
			response.send(r);
		}
	});
});

app.get('/', function(request, response) {
	response.send("<h1>Bienvenido, amijo!</h1><br><a href='/empresas'>Lista de Empresas (REST)</a>");
});

app.listen(PORT, function() {
  console.log("Node app is running at localhost:" + PORT);
});


module.exports = app;

