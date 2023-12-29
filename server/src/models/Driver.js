const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: 'No proporciono una descripcion'
    },
    image: {
      type: DataTypes.STRING
    },
    nationality: {
      type: DataTypes.STRING,
      defaultValue: 'No proporciono una nacionalidad'
    },
    birthdate: {
      type: DataTypes.DATEONLY
    }
  }, {
    timestamps: false
  });
};