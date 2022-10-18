import sequelize from "../database/connection.js";

const getProducts = async (req, res) => {
  try {
    const { QueryTypes } = sequelize;
    const products = await sequelize.query("SELECT * FROM `product`", {
      type: QueryTypes.SELECT,
    });
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { QueryTypes } = sequelize;
    const product = await sequelize.query(
      "SELECT * FROM `product` WHERE `id` = ?",
      {
        replacements: [id],
        type: QueryTypes.SELECT,
      }
    );
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { QueryTypes } = sequelize;
    const products = await sequelize.query(
      "SELECT * FROM `product` WHERE `category` = ?",
      {
        replacements: [category],
        type: QueryTypes.SELECT,
      }
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsByQuery = async (req, res) => {
  try {
    console.log("wada req", req);
    const { name } = req.query;
    console.log("esta wada", name);
    const { QueryTypes } = sequelize;
    const products = await sequelize.query(
      "SELECT * FROM `product` WHERE `name` LIKE ?",
      {
        replacements: [`%%${name}%%`],
        type: QueryTypes.SELECT,
      }
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const methods = {
  getProducts,
  getProductById,
  getProductsByCategory,
  getProductsByQuery,
};
