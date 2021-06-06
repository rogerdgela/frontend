let fs = require('fs');

fs.readFile('texto.txt', function (e, r){
    var log = r.toString();
    var linhas = log.split('\n');

    for (var i in linhas) {
        var partes = linhas[i].split(' ');

        console.log("---------------------");
        console.log("Data: " + partes[0]);
        console.log("Tipo: " + partes[1]);
        console.log("Mensagem: " + partes[2]);
    }
});