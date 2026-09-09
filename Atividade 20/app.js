let app = require('./app/config/server');

let rotaHome = require('./app/routes/home.js');
rotaHome(app);

let rotaSobre = require('./app/routes/sobre.js');
rotaSobre(app);

let rotaProgramacao = require('./app/routes/programacao.js');
rotaProgramacao(app);

let rotaContato = require('./app/routes/contato.js');
rotaContato(app);

let rotaInscricao = require('./app/routes/inscricao.js');
rotaInscricao(app);

// Rota extra (desafio) - usa res.send() ao invés de res.render()
let rotaNovidades = require('./app/routes/novidades.js');
rotaNovidades(app);

app.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});
