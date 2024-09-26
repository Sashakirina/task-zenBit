import { DataTypes } from 'sequelize';
import sequelize from '../config.js';
import User from './user.js';

const Application = sequelize.define('Application', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tiket: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yield: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  daysLeft: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sold: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Application.belongsTo(User, { foreignKey: 'userId' });

export default Application;
