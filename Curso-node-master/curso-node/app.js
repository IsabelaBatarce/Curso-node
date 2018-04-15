var express = require ('express'); //require é uma função js que permite incorporar outros arquivos, neste caso está incorporando a biblioteca do express.
var app = express(); //executando a função que o módulo do express retorna 
var msg = require('./mod_teste') // a variável esta incoporando o módulo mod_teste, utilizando commonJS
//	module.exports(msg) // indica o que o modulo vai exportar quando for requerido

	app.listen(3000, function({  
		 console.log("Servidor rodando com express");
	})); // subir um servidor que escuta requisições da porta 3000. E executando uma função de calllback. 

	//app.get('/', function(req,res){ // requisição da página home. 
		//res.send("<html><body>Notícias de Tecnologia</body></html>");  //resposta a requisição do servidor, utilizando express e tags html.
	//});

	//app.get('/tecnologia', function(req,res){ //requisição da página tecnologia. 
	//	res.send("<html><body>Notícias de Tecnologia</body></html>");  //resposta a requisição do servidor, utilizando express e tags html.
	//});

	//app.get('/moda', function(req,res){ // requisição da página moda. 
	//	res.send("<html><body>Notícias de Tecnologia</body></html>");  //resposta a requisição do servidor, utilizando express e tags html.
	//});

	//app.get('/beleza', function(req,res){ // requisição da página beleza. 
	//	res.send("<html><body>Notícias de Tecnologia</body></html>");  //resposta a requisição do servidor, utilizando express e tags html.
	//});

	app.get('/', function(req,res){ // requisição da página beleza. 
		res.render("home/index");  //resposta a requisição do servidor, utilizando ejs. Portanto, utilizando o método render, o arquivo que foi requisitado será renderizado. 
	});

	app.get('/formulario_inclusao_noticia', function(req,res){ // requisição da página beleza. 
		res.render("admin/form_add_noticia");  //resposta a requisição do servidor, utilizando ejs. Portanto, utilizando o método render, o arquivo que foi requisitado será renderizado. 
	});

	app.get('/noticias', function(req,res){ // requisição da página beleza. 
		res.render("noticias/noticias");  //resposta a requisição do servidor, utilizando ejs. Portanto, utilizando o método render, o arquivo que foi requisitado será renderizado. 
	});


		
app.set('view engine', 'ejs')// para indicar ao express que estamos utilizando ejs para gerar views