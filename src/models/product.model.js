import sequelize from "../database/connection.js";

// query to get all products
export const Products = async () => {
  const { QueryTypes } = sequelize;
  const products = await sequelize.query("SELECT * FROM `product`", {
    type: QueryTypes.SELECT,
  });
  return products;
};

// query to get a product by id
export const ProductById = async (id) => {
  const { QueryTypes } = sequelize;
  const product = await sequelize.query(
    "SELECT * FROM `product` WHERE `id` = ?",
    {
      replacements: [id],
      type: QueryTypes.SELECT,
    }
  );
  return product;
};

// query to get products by category
export const ProductsByCategory = async (category) => {
  const { QueryTypes } = sequelize;
  const products = await sequelize.query(
    "SELECT * FROM `product` WHERE `category` = ?",
    {
      replacements: [category],
      type: QueryTypes.SELECT,
    }
  );
  return products;
};

// query to get products by query
export const ProductsByQuery = async (name) => {
  const { QueryTypes } = sequelize;
  const products = await sequelize.query(
    "SELECT * FROM `product` WHERE `name` LIKE ?",
    {
      replacements: [`%%${name}%%`],
      type: QueryTypes.SELECT,
    }
  );
  return products;
};
