module.exports = function (sequelize, DataTypes) {
  const WorkShop = sequelize.define(
    "WorkShop",
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      presentationMessage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      finalMessage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "WorkShop",
      timestamps: false,
    }
  );

  return WorkShop;
};
