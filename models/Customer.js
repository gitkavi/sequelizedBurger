module.exports = function(sequelize, dataTypes){
    var Customer =sequelize.define("Customer", {
        name: {
            type:dataTypes.STRING,
            allowNull: false
        }       
    },{
        timestamps:false
    });

    Customer.associate = function(models){

        Customer.hasMany(models.Burger, {
            onDelete: "cascade"
        });
    };

    return Customer;
}