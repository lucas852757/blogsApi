module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} _Sequelize 
   */
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('PostCategories',
      [
        {
          postId: 1,
          categoryId: 1,
        },
        {
          postId: 2,
          categoryId: 2,
        },

      ], { timestamps: false });
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} _Sequelize 
   */
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('PostCategories', null, {});
  },
};
