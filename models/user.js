module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            types: DataTypes.TEXT,
            allowNull: null,
            unique: true,
        },
        
        password: {
            type: DataTypes.STRING(64),
            is: /^[0-9a-f]{64}$/i
        }
    
    });
    return User
}