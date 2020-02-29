module.exports = function(sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {
        song: DataTypes.STRING,
        genre: DataTypes.STRING,
        albums: DataTypes.INTEGER,  
    });
    return Artist
}