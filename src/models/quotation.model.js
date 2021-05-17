module.exports = function (sequelize, DataTypes) {
  const Quotation = sequelize.define(
    "Quotation",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      clientId: {
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.STRING,
      },
      serviceList: {
        type: DataTypes.JSON,
      },
      total: {
        type: DataTypes.FLOAT,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "Quotation",
      timestamps: true,
    }
  );
  Quotation.associate = function (models) {
    Quotation.belongsTo(models.Client, { foreignKey: "clientId" });
  };

  return Quotation;
};
