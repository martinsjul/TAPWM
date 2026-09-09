module.exports = function(app){
    app.get('/novidades', function(req, res){
        // Diferença entre res.send() e res.render():
        // - res.render() processa um arquivo .ejs (view engine), permitindo montar HTML
        //   dinâmico a partir de um template e de dados enviados pelo servidor.
        // - res.send() apenas envia diretamente o conteúdo (aqui, uma string HTML) como
        //   resposta, sem passar por nenhum motor de views/template. É mais simples,
        //   mas perde a organização e o reaproveitamento de estrutura que o EJS oferece.
        res.send(`
            <html>
                <head><title>Novidades - Semana de Tecnologia</title></head>
                <body>
                    <h1>Novidades</h1>
                    <p>Em breve mais novidades sobre a Semana de Tecnologia serão divulgadas aqui!</p>
                    <a href="/">Voltar para o início</a>
                </body>
            </html>
        `);
    });
}
