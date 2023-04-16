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
const connection = mysql.createConnection(config)

const sql = `SELECT * from Persons;`

connection.query(sql, (resp, results) => {
    if(results) {
        let tableHtml = ''

        results.forEach(r => {
            tableHtml += `
                <tr>
                    <td>${r.id}</td>
                    <td>${r.name}</td>
                </tr>
            `
        })

        app.get('/', (req,res) => {
            res.send(`<h1>Full Cycle</h1>
            <table>
                <tr>
                <th>ID</th>
                <th>Name</th>
                </tr>
                ${tableHtml}
            </table>`)
        })
        
        return app.listen(port, ()=> {
            console.log('Rodando na porta ' + port)
        })  
    }

    console.error('People not found')
})

connection.end()
