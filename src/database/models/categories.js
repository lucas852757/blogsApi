/** source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-interface-da-aplicacao-com-o-banco-de-dados/d0fc385e-b0ce-4b3d-8246-779d5dc13682/conteudos/087fdb7c-330e-4299-97e1-efe1692ab8dc/model/8e9750a0-360a-40a2-96e1-12f759c8d808?use_case=side_bar 
 * 
 * source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-241-orm-interface-da-aplicacao-com-o-banco-de-dados
*/


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Categories extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Categories.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Categories',
//   });
//   return Categories;
// };

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  })
  return Category;
};

module.exports = Category;