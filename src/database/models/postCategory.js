/** source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/82c3bd70-4da0-4a85-bf56-cce8d3f8c186/relacionamentos-nn/c8438dd6-a43d-42fe-aa52-66baa9ca23c3?use_case=side_bar */

/**source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-242-orm-associations */
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  },
  {timestamps: false});
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through:'PostCategory',
      foreignKey:'id',
      otherKey: 'id',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostCategory',
      foreignKey: 'id',
      otherKey: 'id'
    });
  }
  return PostCategory;
};

module.exports = PostCategory;