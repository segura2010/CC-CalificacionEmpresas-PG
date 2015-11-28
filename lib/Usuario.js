

exports.UsuarioControlador = function(colecc){

	// Coleccion de la BD PG
	this.coleccion = colecc;

	/*
	this.add = function(nombre, password, cb){
		// Recibe el nombre de la empresa a crear y la funcion callback
		var c = this.coleccion;
		this.getByName(nombre, function(err, usuarios){
			if(usuarios.length == 0)
			{	// No quiero empresas repetidas
				c.insert({
					nombreusuario: nombre,
					password: password // Al ser un Object JSON, un nuevo voto de un usuario sobreescribe el anterior
				}, cb);
			}
			else
			{
				cb("Error: Usuario repetido", null);
			}
		});
	};

	this.getById = function(id, cb){
		// Obtiene al usuario con el ID especificado
		this.coleccion.find({_id:id}, cb);
	};

	this.getByName = function(nombre, cb){
		// Obtiene al usuario con el nombre de usuario especificado
		this.coleccion.find({nombreusuario:nombre}, cb);
	};

	this.search = function(nombre, cb){
		// Obtiene los usuarios que contienen en el nombre el nombre indicado
		this.coleccion.find({nombreusuario:{"$regex":nombre}}, cb);
	};

	this.list = function(limit, cb){
		// Devuelve los usuarios, tantos como se indique con limit
		this.coleccion.find({}, {limit: limit}, cb);
	};

	this.delete = function(nombre, cb){
		// Elimina al usurio con el nombre indicado
		this.coleccion.remove({nombreusuario:nombre}, cb);
	};
	*/

};

