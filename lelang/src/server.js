const express = require("express");
const PORT = process.env.PORT || 9000;
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "impal database"
});

connection.connect(function(err) {
  err ? console.log(err) : console.log(connection);
});

require("./routes/html-routes")(app, connection);

app.listen(PORT, () => {
  console.log("cek");
});
