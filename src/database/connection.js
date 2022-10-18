import { Sequelize } from "sequelize";
import config from "../config.js";

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

export default sequelize;
