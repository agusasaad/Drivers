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
      unique: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: 'No proporciono una descripcion'
    },
    image: {
      type: DataTypes.TEXT
    },
    nationality: {
      type: DataTypes.STRING,
      defaultValue: 'No proporciono una nacionalidad'
    },
    dob: {
      type: DataTypes.DATEONLY
    }
  }, {
    timestamps: false
  });
};