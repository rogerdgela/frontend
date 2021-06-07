let http = require('http');

http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Este é um teste');
}).listen(8080);

console.log('Servidor rodando na porta 8080');