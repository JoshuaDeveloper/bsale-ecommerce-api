import sequelize from "../database/connection.js";

export const Category = async () => {
  const { QueryTypes } = sequelize;
  const category = await sequelize.query("SELECT * FROM `category`", {
    type: QueryTypes.SELECT,
  });
  return category;
};
