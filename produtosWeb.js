var http = require('http');
var porta = 3000;
var ip = "localhost";

var server = http.createServer(function(request, response) {

    if(request.url == "/produtos"){
        response.end('<html><body>Listando produtos da loja</body></html>');
    }else {
        response.end('<html><body>Home da casa dos código</body></html>');
    }
});

server.listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");