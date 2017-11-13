function ProdutosBranco(connection){
    this.connection = connection;
}

ProdutosBranco.prototype.lista = callback => {
    this.connection.query('select * from produtos', callback);
}

module.exports = () => {
    return ProdutosBranco;
}