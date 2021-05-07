const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  //Change the password to yours
  password: "Makemba5$",
  database: "TESTER",
});

app.listen(3001, () => {
  console.log("running server");
});

app.post("/registerNonprofit", (req, res) => {
  const orgName = req.body.orgName;
  const password = req.body.password;
  const email = req.body.email;
  const phoneNum = req.body.phoneNum;
  const Location = req.body.Location;
  const address = req.body.address;
  //const [city, setCityReg] = useState("");
  const zipCode = req.body.zipCode;

  var sql =
    "INSERT INTO NonProfits (OrgName, Address, Location, ZipCode, PhoneNumber, Email, Password) VALUES(?,?,?,?,?,?,?)";
  var vals = [orgName, password, email, phoneNum, Location, zipCode, address];
  connection.query(sql, vals, (err, result) => {
    console.log(err);
  });
});

//connection.connect(function (err) {
//   // if (err) throw err;
//   // console.log("Connection has been established!");
//   // connection.query("CREATE DATABASE TESTER", function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Database created");
//   // });
//   // var sql =
//   //   "CREATE TABLE NonProfits (OrgName VARCHAR(255), Address VARCHAR(255), Location VARCHAR(255), ZipCode VARCHAR(255), PhoneNumber VARCHAR(255), Email VARCHAR(255), Password VARCHAR(255))";
//   // connection.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Columns have been created!");
//   // });
//   //INSERTING INTO TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
//   //Just finish the "var sql ". The link above will show you the syntax.
//   //Just insert fake people and their information. Make sure you are using the correct column names.
//   // var sql =
//   //   "INSERT INTO NonProfits (OrgName, Address, Location, ZipCode, PhoneNumber, Email, Password) VALUES('', '', '', '')";
//   // connection.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Information has been inserted into the table!");
//   // });
//SELECTING FROM TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_where.asp
//Please note that each link is specific to updating, selecting, inserting & etc. So make sure you use the links i provide for each task.
//Finish "var sql" using the link provided above. Just select info from whichever column you want using the fake info from INSERT INTO TABLE SECTION
//var sql = "SELECT * FROM NonProfits";
//connection.query(sql, function (err, result) {
//  if (err) throw err;
// console.log(result);
// });
//   // //UPDATING TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_update.asp
//   // //Update whichever column you want with new information. For example you can change the fake person's name or email.
//   // var sql =
//   //   "UPDATE NonProfits SET Organization = 'Bocats' WHERE Organization = 'UWMC'";
//   // connection.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Table has been updated!");
//   // });
//   // //DELETING FROM TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_delete.asp
//   // //Pick a column and delete the info for the fake person you created
//   // var sql = "DELETE FROM NonProfits WHERE CityRegisteredIn = 'Merced'";
//   // connection.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Attributes have been deleted!");
//   // });
//});
