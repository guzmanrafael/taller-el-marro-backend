module.exports = function (sequelize, DataTypes) {
  const Client = sequelize.define(
    "Client",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "Client",
      timestamps: true,
    }
  );
  Client.associate = function (models) {
    Client.associate = function (models) {
      Client.hasMany(models.Quotation, {
        foreignKey: "clientId",
      });
    };
  };

  return Client;
};
