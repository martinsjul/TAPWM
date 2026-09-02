module.exports = function(app){
    app.get('/informacoes/professores', function(req, res){
        res.render('informacoes/professores');
    });
}