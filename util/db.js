const postgresDB = require('pg');
const {Sequelize}=require('sequelize');
require('dotenv').config();

exports.sqlize=new Sequelize(process.env.POSTGRESQL_URI,{
    dialect:'postgres',
    logging:false,
});

