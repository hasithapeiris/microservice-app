import Product from "../models/productModel.js";

// Fetch all products
export const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a product
export const createProduct = async (req, res) => {
  try {
    const { name, category, image, description } = req.body;

    const newProduct = new Product({
      name,
      category,
      image,
      description,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
