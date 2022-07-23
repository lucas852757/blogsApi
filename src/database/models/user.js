/**source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-interface-da-aplicacao-com-o-banco-de-dados/d0fc385e-b0ce-4b3d-8246-779d5dc13682/conteudos/087fdb7c-330e-4299-97e1-efe1692ab8dc/recapitulando-sequelize-do-zero/0c518037-dabb-40e7-ba86-74f3034c47f6?use_case=side_bar */

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
   
    id: {  allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {timestamps: false})
  return User;
};

module.exports = User;