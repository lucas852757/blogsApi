// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class PostCategories extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   PostCategories.init({
//     postId: DataTypes.INTEGER,
//     categoryId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'PostCategories',
//   });
//   return PostCategories;
// };

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',{
   
    postId: {
      allowNull: false,
      primaryKey: false,
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      primaryKey: false,
      type: DataTypes.INTEGER
    }
  });

  return PostCategory;
}

module.exports = PostCategory;