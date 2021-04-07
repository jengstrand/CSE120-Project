const express = require('express')
const app = express()
const mysql = require ('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localHost',
    password: 'awesomeman12',
    database: 'employeeSystem'

});

app.post("/RegVolunteer", (req,res) => {

    const username = req.body.username 
    const password = req.body.password

    db.query(
        "INSERT INTO volunteers (username,password,email,firstname,lastname,phone,age,zipcode,travel) VALUES (?,?,?,?,?,?,?,?,?)",
        [username,password,email,firstname,lastname,phone,age,zipcode,travel],
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send("Values Inserted")
            }
        }
    );
});







app.post("/create", (req,res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query(
        "INSERT INTO employees (name,age,country,position, wage) VALUES (?,?,?,?,?)",
        [name,age,country,position,wage], 
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send("Values Inserted")
            }
        }
    );
});

app.get("/employees", (req,res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
             res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Yay, your server is running on port 3001");
})
