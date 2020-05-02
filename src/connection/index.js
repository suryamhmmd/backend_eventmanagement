const mysql = require('mysql')

const conn = mysql.createConnection({
    user: "root",
    password: "Ihsanazmi26",
    host: "localhost",
    database: "event_management",
    port: 3306
})

module.exports = conn