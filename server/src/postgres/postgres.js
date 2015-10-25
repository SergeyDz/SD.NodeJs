var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://test:test@localhost:5432/test', {
	define: {
    	timestamps: false // true by default
  	}
  }
);

module.exports = {
	Sequelize: Sequelize, 
	sequelize: sequelize
};