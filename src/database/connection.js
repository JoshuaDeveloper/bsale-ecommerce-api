import { Sequelize } from "sequelize";
import config from "../config.js";
// connection to database
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

export default sequelize;
