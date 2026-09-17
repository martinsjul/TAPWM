module.exports = function(app) {
    app.get('/informacao/professores', function(req, res) {

        const sql = require('msnodesqlv8');

        const connectionString =
            'Driver={ODBC Driver 18 for SQL Server};' +
            'Server=(localdb)\\MSSQLLocalDB;' +
            'Database=master;' +
            'Trusted_Connection=Yes;' +
            'TrustServerCertificate=Yes;';

        sql.query(
            connectionString,
            'SELECT * FROM professores',
            function(err, rows) {

                if (err) {
                    console.log(err);
                    res.status(500).json({
                        erro: 'Erro ao buscar professores'
                    });
                    return;
                }

                res.render('informacao/professores', {
                    profs: rows
                });
            }
        );
    });
};