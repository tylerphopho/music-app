
// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {
    // Search Artists
  app.get("/api/:music", function(req, res){
    db.Music.findAll({}).then(function(results){
      res.json(results);
   });
  });
};