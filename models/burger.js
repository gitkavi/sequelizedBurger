module.exports = function(sequelize,dataTypes){
var Burger = sequelize.define("burger", {
    burger_name:dataTypes.STRING,
    devoured: {
        type:dataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
},{
    timestamps: false
});
    return Burger;
}