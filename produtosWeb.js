var http = require('http');

var server = http.createServer(function(req, res){
    res.end("<html><body>Listando os produtos</body></html>")
});

server.listen('3000');

console.log("Servidor rodando");