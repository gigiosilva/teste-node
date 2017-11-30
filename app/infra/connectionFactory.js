var mysql = require('mysql');
var connectMYSQL = function(){
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: "localhost",
            //port: "3307",
            user: "root",
            password : "root",
            database: "testedb",
        });
    }
    
    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: "localhost",
            //port: "3307",
            user: "root",
            password : "root",
            database: "testedb_teste",
        });
    }
};

//wrapper
module.exports = () => {
    return connectMYSQL;
}