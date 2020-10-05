const { Pool } = require('pg') // pool - nao precisa usar credenciais toda vez que executar um comando

module.exports = new Pool ({
    user:'postgres',
    password:'mrco256894',
    host:'localhost',
    port:5432,
    database:'gymmanager'
})

