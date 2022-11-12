import { Category } from "../models/category.model.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const methods = {
  getCategories,
};
