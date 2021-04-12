const express = require('express')
const app = express()
const mysql = require ('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10

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
    const email = req.body.email
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phone = req.body.phone
    const age = req.body.age
    const zipcode = req.body.zipcode
    const travel = req.body.travel
    
    let sqlQuery = "SELECT * FROM volunteers WHERE username = ? LIMIT 1"; 
    db.query(sqlQuery, [username], function(error, results){ 
        // There was an issue with the query 
        if(error){ 
            callback(error); 
            return; 
        } 
     
        if(results.length){ 
            // The username already exists 
            res.send({message: "Username already exists, please choose another username."});
        }
        else{ 
            //The username wasn't found in the database 
            // bcrypt.hash(password,saltRounds, (err, hash) =>{
            //     if (err) {
            //         console.log(err)
            //     }

           
                db.query(
                    "INSERT INTO volunteers (username,password,email,firstname,lastname,phone,age,zipcode,travel) VALUES (?,?,?,?,?,?,?,?,?)",
                    [username,password,email,firstname,lastname,phone,age,zipcode,travel],
                        (err,result) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                res.send("Values Inserted");
                            }
                        }
                ); //end insertion db.query
            //}) //end bcrypt hash
        } //end else statement
    }); //end check username db.query
}); //end RegVolunteer

app.post("/RegOrganization", (req,res) => {

    const username = req.body.username 
    const password = req.body.password
    const email = req.body.email
    const orgname = req.body.orgname
    const phone = req.body.phone
    const address = req.body.address

    let sqlQuery = "SELECT * FROM organizations WHERE username = ? LIMIT 1"; 
    db.query(sqlQuery, [username], function(error, results){ 
        // There was an issue with the query 
        if(error){ 
            callback(error); 
            return; 
        } 
     
        if(results.length){ 
            // The username already exists 
            res.send({message: "Username already exists, please choose another username."});
        }
        else{ 
            //The username wasn't found in the database 
            // bcrypt.hash(password,saltRounds, (err, hash) =>{
            //     if (err) {
            //         console.log(err)
            //     }

           
                db.query(
                    "INSERT INTO organizations (username,password,email,orgname,phone,address) VALUES (?,?,?,?,?,?)",
                    [username,password,email,orgname,phone,address],
                    (err,result) => {
                        if (err) {
                            console.log(err)
                        }
                         else {
                            res.send("Values Inserted")
                        }
                    }
                ); //end insertion db.query
            //}) //end bcrypt hash
        } 
    }); 
});

app.post("/organizationLogin", (req,res) => {

    const username = req.body.username 
    const password = req.body.password
    const email = req.body.email
    const orgname = req.body.orgname
    const phone = req.body.phone
    const address = req.body.address

    db.query(
        "SELECT * FROM organizations WHERE username = ? AND password = ?",
        [username,password,email,orgname,phone,address],
        (err,result) => {
            if (err) {
                //query error
                res.send({err: err});
            }
                
            
            if (result.length > 0) {
                    //correct username/password
                    // bcrypt.compare(password, result[0].password, (error, response) => {
                    //     if (response) {
                    //         res.send(result);
                    //     }
                    //     else {
                    //         //wrong username/password
                    //         res.send({message: "Wrong username/password"});
                    //     }
                    // });
                    res.send(result);
            }
                else {
                    res.send({message: "wrong username/password"});
                }
            
        }
    );
});




app.post("/volunteerLogin", (req,res) => {

    const username = req.body.username 
    const password = req.body.password
    const email = req.body.email
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phone = req.body.phone
    const age = req.body.age
    const zipcode = req.body.zipcode
    const travel = req.body.travel

    db.query(
        "SELECT * FROM volunteers WHERE username = ? AND password = ?",
        [username,password,email,firstname,lastname,phone,age,zipcode,travel],
        (err,result) => {
            if (err) {
                //query error
                res.send({err: err});
            }
                
            
            if (result.length > 0) {
                    //correct username/password
                // bcrypt.compare(password, result[0].password, (error, response) => {
                //     if (response) {
                //         res.send(result);
                //     }
                //     else {
                //         //wrong username/password
                //         res.send({message: "Wrong username/password"});
                //     }
                // });
                res.send(result);
            }
                else {
                    res.send({message: "Wrong username/password"});
                }
            
        }
    );
});

// app.post("/recoverOrganization", (req,res) => {

//     const username = req.body.username 
//     const password = req.body.password
//     const Newpassword = req.body.password
//     const recoverykey = req.body.recoverykey

//     let sqlQuery = "SELECT * FROM organizations WHERE username = ? AND recoverykey = ? LIMIT 1"; 
//     db.query(sqlQuery, [username,recoverykey], function(error, results){ 
//         // There was an issue with the query 
//         if(error){ 
//             callback(error); 
//             return; 
//         } 
     
//         if(results[0].recoverykey == recoverykey && results[0].username == username){ 
//             bcrypt.hash(Newpassword,saltRounds, (err, hash) =>{
//                 if (err) {
//                     console.log(err)
//                 }

           
//                 db.query(
//                     "UPDATE organizations SET password = ? where password = ?",
//                     [Newpassword,password],
//                     (result) => {
//                         if (err) {
//                             console.log(err)
//                         }
//                          else {
//                             res.send({message: "new password is set"});
//                         }
//                     }
//                 ); //end insertion db.query
//             }) //end bcrypt hash
//         }
//         else{ 
//             //The username wasn't found in the database 
//             res.send({message: "Wrong username/recoverykey"});
            
//         } 
//     }); 
          
// });







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
