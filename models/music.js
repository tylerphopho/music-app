// Model for Music
module.exports = function(sequelize, DataTypes) {
    var Music = sequelize.define("Music", {
        artist: DataTypes.STRING,
        song: DataTypes.STRING,
        genre: DataTypes.STRING,
        albums: DataTypes.INTEGER,  
    });
    return Music
}