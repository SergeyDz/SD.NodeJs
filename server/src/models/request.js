var postgres = require('../postgres/postgres.js'), 
	Sequelize = postgres.Sequelize,
	sequelize = postgres.sequelize;

var Request = sequelize.define('requests', {
  code: Sequelize.STRING,
  name: Sequelize.TEXT
});

module.exports = Request;