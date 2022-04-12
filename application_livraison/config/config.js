// configuration database 

require('dotenv').config()

module.exports = {
    db: {
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        dialect : process.env.DB_CONNECTION,
    }
}