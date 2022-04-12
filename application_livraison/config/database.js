const  Sequelize = require('sequelize');

const configDB = require("./config")['db']



module.exports = new Sequelize(
    configDB.database,
    configDB.username,
    configDB.password,
    configDB
)