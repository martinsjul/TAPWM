let express = require('express');
let app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send("<html><body><h1>Site da Fatec de Sorocaba</h1></body></html>");
    });
app.get('/historia', function(req, res){
    res.render('secao/historia');
    });

app.get('/cursos', function(req, res){
    res.render('secao/cursos');
    });
app.get('/professores', function(req, res){
    res.render('secao/professores');
    });
    app.listen(3000, function(){
        console.log("Iupiiii o servidor subiuuu")
    });
