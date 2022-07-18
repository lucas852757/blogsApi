module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} _Sequelize 
   */
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('BlogPosts',
      [
        {
          id: 1,
          title: 'Post do Ano',
          content: 'Melhor post do ano',
          userId: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
        {
          id: 2,
          title: 'Vamos que vamos',
          content: 'Foguete não tem ré',
          userId: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
      ]);
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} _Sequelize 
   */
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('BlogPosts', null, {});
  },
};
