/**https://www.faqcode4u.com/faq/33201/sequelize-js-timestamp-not-datetime */
'use strict';
module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'publishedAt'
      },
      updatedAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  /**
   * 
   * @param {import('sequelize').queryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};