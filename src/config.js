import { config } from "dotenv";

config();
// Accessing the environment variables
export default {
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
};
