const mysql = require('mysql')

const conn = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "event_management",
    port: 3306
})

module.exports = conn