const express = require('express')
const app = express()

const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'peopledb'
};

const mysql = require('mysql')
const sql = `SELECT * from People;`

const createTableSql = `CREATE TABLE IF NOT EXISTS People (id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id));`

const createTableSqlConn = mysql.createConnection(config)
createTableSqlConn.query(createTableSql)
createTableSqlConn.end()

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    connection.query(sql, (resp, results) => {
        let tableHtml = ''

        if(!resp && results) {
            results.forEach(r => {
                tableHtml += `
                    <tr>
                        <td>${r.id}</td>
                        <td>${r.name}</td>
                    </tr>
                `
            })
    
            res.send(`<h1>Full Cycle Rocks!</h1>
                <table>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    </tr>
                    ${tableHtml.length ? tableHtml : '<th>-</th><th>Sem resultados</th>'}
                </table>`)
            return 
        }
    
        return res.send(`<h1>Full Cycle Rocks!</h1><p>Erro ao conectar no banco de dados</p>`)
    })
    
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})  