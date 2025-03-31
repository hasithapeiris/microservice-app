import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  description: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
