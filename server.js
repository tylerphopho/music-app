var express = require("express");
var db = require("./public/index");

var PORT = process.env.PORT || 3000;
var app = express();

// Static directory to be served
app.use(express.static("app/public"));
app.use(express.json());
// Routes
// =============================================================
require("./routes/api-routes")(app);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Listening on port %s", PORT);
    });
});

