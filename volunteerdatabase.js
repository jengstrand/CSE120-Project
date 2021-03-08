// The following file deals with creating the database for volunteers.

var mysql = require("mysql");

//Make sure you change the password to your own
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  //Change the password to yours
  password: "Makemba5$",
  database: "volunteer2",
});

//Connecting to Database, creating tables, & also inserting/deleting/selecting/updating table.
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection has been established!");
  // connection.query("CREATE DATABASE volunteer2", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });
  var sql =
    "CREATE TABLE volunteer3 (FirstName VARCHAR(255),  LastName VARCHAR(255), Email VARCHAR(255), Password VARCHAR(255), PhoneNumber VARCHAR(255), AgeGroup VARCHAR(255), ZipCode VARCHAR(255), TravelDistance VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Columns have been created!");
  });

  //INSERTING INTO TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
  //Just finish the "var sql ". The link above will show you the syntax.
  //Just insert fake people and their information. Make sure you are using the correct column names.
  var sql =
    "INSERT INTO volunteer3 (FirstName, LastName, Email, Password, PhoneNumber, AgeGroup, ZipCode, TravelDistance) VALUES('Josh', 'Ngalima', 'jngalima@merced.com', 'pass123', '123456789', '2', '95348', '10')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Information has been inserted into the table!");
  });

  //SELECTING FROM TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_where.asp
  //Please note that each link is specific to updating, selecting, inserting & etc. So make sure you use the links i provide for each task.
  //Finish "var sql" using the link provided above. Just select info from whichever column you want using the fake info from INSERT INTO TABLE SECTION
  var sql = "SELECT * FROM volunteer3 WHERE FirstName = 'Josh'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Attributes have been selected!");
  });

  //UPDATING TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_update.asp
  //Update whichever column you want with new information. For example you can change the fake person's name or email.
  var sql =
    "UPDATE volunteer3 SET FirstName = 'Jonathan' WHERE FirstName = 'Josh'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table has been updated!");
  });

  //DELETING FROM TABLE: Use this link https://www.w3schools.com/nodejs/nodejs_mysql_delete.asp
  //Pick a column and delete the info for the fake person you created
  var sql = "DELETE FROM volunteer3 WHERE TravelDistance = '10'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Attributes have been deleted!");
  });
});
