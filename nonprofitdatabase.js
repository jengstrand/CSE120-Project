// The following file deals with creating a database for non-profit organizations

var mysql = require("mysql");

//Make sure you change the password to your own
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  //Change the password to yours
  password: "Makemba5$",
  database: "NonProfits",
});

//Connecting to Database, creating tables, & also inserting/deleting/selecting/updating table.
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection has been established!");
  // connection.query("CREATE DATABASE NonProfits", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });
  var sql =
    "CREATE TABLE NonProfits (Organization VARCHAR(255), Email VARCHAR(255),PhoneNumber VARCHAR(255), CityRegisteredIn VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Columns have been created!");
  });

  //INSERTING INTO TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
  //Just finish the "var sql ". The link above will show you the syntax.
  //Just insert fake people and their information. Make sure you are using the correct column names.
  var sql =
    "INSERT INTO NonProfits (Organization, Email, PhoneNumber, CityRegisteredIn) VALUES('UWMC', 'uwmc@merced.com', '123456789', 'Merced')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Information has been inserted into the table!");
  });

  //SELECTING FROM TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_where.asp
  //Please note that each link is specific to updating, selecting, inserting & etc. So make sure you use the links i provide for each task.
  //Finish "var sql" using the link provided above. Just select info from whichever column you want using the fake info from INSERT INTO TABLE SECTION
  var sql = "SELECT * FROM NonProfits WHERE Organization = 'UWMC'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Attributes have been selected!");
  });

  //UPDATING TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_update.asp
  //Update whichever column you want with new information. For example you can change the fake person's name or email.
  var sql =
    "UPDATE NonProfits SET Organization = 'Bocats' WHERE Organization = 'UWMC'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table has been updated!");
  });

  //DELETING FROM TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_delete.asp
  //Pick a column and delete the info for the fake person you created
  var sql = "DELETE FROM NonProfits WHERE CityRegisteredIn = 'Merced'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Attributes have been deleted!");
  });
});
