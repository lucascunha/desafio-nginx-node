const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const port = 3000

var firstName = "Teste OK!";

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

let createPeople = `create table if not exists people(
  id int not null auto_increment,
  name varchar(255),
  primary key(id)
)`;

connection.query(createPeople, function(err, results, fields) {
  if (err) {
    console.log(err.message);
  }
});

connection.query(`INSERT INTO people(name) values('Lucas')`)

const sql = `SELECT name from people`
connection.query(sql, (error, results, fields) => {
    if (error) throw error
    firstName = results[0].name
})

connection.end()

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
  res.render("index", { message: "Full Cycle Rocks!", lista: firstName });
});

app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");