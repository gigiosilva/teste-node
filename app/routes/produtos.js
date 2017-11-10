module.exports = (app) => {
    app.get('/produtos', (request, response) => {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: testedb
        });

        connection.query('select * from livros', (err, results) => {
            response.send(results);
        });

        connection.end();
        //consulta
        response.render("produtos/lista")
    });
}
