'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: "11122112",
      firstName: 'Meu',
      lastName: 'Den',
      phoneNumber: '0346485614',
      address: 'VN',
      gender: 1,
      image: 'https://scontent.fdad7-1.fna.fbcdn.net/v/t1.6435-9/221988776_337989661360292_6669756797859080844_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oywDxwB9PqgAX_XBBkx&_nc_ht=scontent.fdad7-1.fna&oh=2e94215420ade4e781891a90f3b4aac4&oe=614087E8',
      roleId: 'R1',
      positionId: 'm1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
