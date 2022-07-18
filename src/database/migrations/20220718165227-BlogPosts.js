'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATA,
      },
      updatedAt: {
        type: Sequelize.DATA
      }
    });
  },

  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
