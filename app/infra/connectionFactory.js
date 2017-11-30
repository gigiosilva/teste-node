var mysql = require('mysql');
var connectMYSQL = function(){
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: "localhost",
            port: "3307",
            user: "root",
            password : "usbw",
            database: "testedb",
        });
    }
    
    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: "localhost",
            port: "3307",
            user: "root",
            password : "usbw",
            database: "testedb_teste",
        });
    }

    if(process.env.NODE_ENV == 'production') {
        var url = process.env.CLEARDB_DATABASE_URL;
        var grupos = url.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?/);
        return mysql.createConnection({
            host:grupos[3],
            user:grupos[1],
            password:grupos[2],
            database:grupos[4]
        });
    }
};

//wrapper
module.exports = () => {
    return connectMYSQL;
}

