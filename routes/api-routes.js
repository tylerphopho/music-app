
// Dependencies
// =============================================================
var db = require("../public/index");
var Artist = require("../models/artist.js");


// Routes
// =============================================================
module.exports = function(app) {
    // Search Artists
  app.get("/api/:artist", function(req, res){
    db.Artist.findAll({}).then(function(results){
      res.json(results);
   });
  });
};