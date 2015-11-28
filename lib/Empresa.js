

exports.EmpresaControlador = function(colecc){

	// Coleccion de la BD PG
	this.coleccion = colecc;


	this.createTable = function(){
		var query = this.coleccion.query('CREATE TABLE IF NOT EXISTS empresas (id SERIAL PRIMARY KEY, nombre VARCHAR(30) NOT NULL, calificacion INTEGER)');
	};
	this.createTable();

	this.add = function(nombre, cb){
		// Recibe el nombre de la empresa a crear y la funcion callback
		var c = this.coleccion;
		c.query("INSERT INTO empresas(nombre, calificacion) VALUES($1, $2)", [nombre, 0]);
		cb(null, "ok");
	};

	this.list = function(cb){
		// Devuelve las empresas, tantas como se indique con limit
    	
    	var query = this.coleccion.query("SELECT * FROM empresas");
    	var r = [];

	    // Devolvemos los resultados de la consulta de selección
	    query.on('row', function(row) {
	      r.push(row);
	    });

	    // Cerramos la conexión y devolvemos los datos
	    query.on('end', function() {
	    	cb(null, r);
	    });
	};

	this.delete = function(id, cb){
		// Elimina la empresa con el nombre indicado
		this.coleccion.query("DELETE FROM empresas WHERE id=($1)", [id]);
		cb(null, "ok");
	};

	this.update = function(id, nombre, cb){
		this.coleccion.query("UPDATE empresas SET nombre=($1) WHERE id=($2) ", [nombre, id]);
		cb(null, "ok");
	}

};
