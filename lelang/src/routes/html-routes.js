const mysql = require("mysql");

module.exports = function(app, connection) {
  app.get("/login", function(req, res) {
    connection.query("SELECT * FROM admin", function(err, data) {
      err ? res.send(err) : res.json({ admin: data });
    });
  });
};
