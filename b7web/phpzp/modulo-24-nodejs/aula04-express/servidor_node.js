let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public_html'));

app.listen(8080);