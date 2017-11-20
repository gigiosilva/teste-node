var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: "localhost",
        //port: "3307",
        user: "root",
        password : "root",
        database: "testedb",
    });
}

//wrapper
module.exports = () => {
    return createDBConnection;
}