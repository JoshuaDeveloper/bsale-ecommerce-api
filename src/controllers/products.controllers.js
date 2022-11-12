import {
  Products,
  ProductById,
  ProductsByCategory,
  ProductsByQuery,
} from "../models/product.model.js";

// endpoint to get all products
const getProducts = async (req, res) => {
  try {
    const products = await Products();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// endpoint to get a product by id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductById(id);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// endpoint to get products by category
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await ProductsByCategory(category);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// endpoint to get products by query
const getProductsByQuery = async (req, res) => {
  try {
    const { name } = req.query;
    const products = await ProductsByQuery(name);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export all methods
export const methods = {
  getProducts,
  getProductById,
  getProductsByCategory,
  getProductsByQuery,
};
