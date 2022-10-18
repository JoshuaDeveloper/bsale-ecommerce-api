import sequelize from "../database/connection.js";

const getProducts = async (req, res) => {
  try {
    const { QueryTypes } = require("sequelize");
    const products = await sequelize.query("SELECT * FROM `product`", {
      type: QueryTypes.SELECT,
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { QueryTypes } = require("sequelize");
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
    const { QueryTypes } = require("sequelize");
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
    const { query } = req.params;
    const { QueryTypes } = require("sequelize");
    const products = await sequelize.query(
      "SELECT * FROM `product` WHERE `name` LIKE ?",
      {
        replacements: [`%${query}%`],
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
