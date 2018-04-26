module.exports = function (sequelize, dataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: dataTypes.STRING,
        devoured: {
            type: dataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    },
        {
            timestamps: false
        }
    );

    Burger.associate = function (models) {

        Burger.belongsTo(models.Customer, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Burger;
}