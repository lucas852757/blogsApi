/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
   
    id: {  allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  })
};

module.exports = User;