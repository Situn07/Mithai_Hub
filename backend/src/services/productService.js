import Product from "../models/Product.js";

export const createProductService = async (data) => {
  return await Product.create(data);
};

export const getProductsService = async () => {
  return await Product.find({
    isActive: true,
  });
};

export const getProductByIdService = async (id) => {
  return await Product.findById(id);
};

export const updateProductService = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteProductService = async (id) => {
  return await Product.findByIdAndDelete(id);
};
