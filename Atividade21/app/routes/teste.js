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
            console.log('ERRO:');
            console.log(err);
            return;
        }

        console.log('CONEXÃO OK!');
        console.log(rows);
    }
);