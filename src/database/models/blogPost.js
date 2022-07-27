/**source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/82c3bd70-4da0-4a85-bf56-cce8d3f8c186/relacionamentos-11/76c5ab17-3f5c-4aaf-a0f4-eb2c7ae679e8?use_case=next_button */
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    published: {
      allowNull: false,
      type: 'TIMESTAMP',
      // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated: {
      allowNull: false,
      type: 'TIMESTAMP',
      // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  },
  {
    tableName: 'BlogPosts'
  })

  BlogPost.associate = (models ) => {BlogPost.belongsTo(models.User, {foreignKey: 'id', as: 'users'})}

  return BlogPost;
};

module.exports = BlogPost;