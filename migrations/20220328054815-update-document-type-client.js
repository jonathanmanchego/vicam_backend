'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Clients',
        'document_type',
        {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'DocumentTypes',
            },
            key: 'id',
          },
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Clients', 'document_type', {
      transaction,
    });
  },
};
