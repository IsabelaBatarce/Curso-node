var http = require('http'); // require é uma função js que permite incorporar outros arquivos, neste caso está incorporando a biblioteca http.

var server = http.createServer(function(req,res){ //Criando o servidor, e utilizando uma função de requisição e resposta como argumento.
    var categoria = req.url; // url requisitada
    if(categoria == '/tecnologia'){ 
        res.end("<html><body>Notícias de Tecnologia</body></html>");  //resposta a requisição do servidor, utilizando tags html.
    }else if(categoria == '/moda'){
        res.end("<html><body>Notícias de Moda</body></html>");
    }else if(categoria == '/beleza'){
        res.end("<html><body>Notícias de Beleza</body></html>");
    }else{
        res.end("<html><body>Portal de Notícias</body></html>");
    }
});

server.listen(3000); //o servidor está escutando a porta 3000, isto é verificando o que está sendo requisitado na porta 3000.