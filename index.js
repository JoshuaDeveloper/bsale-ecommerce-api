import app from "./src/app.js";
import sequelize from "./src/database/connection.js";

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(app.get("port"));
    console.log("Server on port", app.get("port"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
