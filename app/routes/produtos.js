module.exports = app => {

    app.get("/produtos", (req, res) => {

        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.produtosBanco(connection);
        
        produtosBanco.lista((err, results) => {
            res.render('produtos/lista', {lista: results});
        });

        connection.end();

    });

    app.get('produtos/remove', () => {

        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);
        var produto = produtosBanco.carrega(id, callback);

        if(produto){
            produtosBanco.remove(produto,callback);
        }

    });
}
