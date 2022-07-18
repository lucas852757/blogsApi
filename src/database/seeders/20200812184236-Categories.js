module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} _Sequelize 
   */
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Categories',
      [
        {
          id: 1,
          name: 'Inovação',
        },
        {
          id: 2,
          name: 'Escola',
        },
      ], { timestamps: false });
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} _Sequelize 
   */
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
