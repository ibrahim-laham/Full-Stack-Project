import { NotFoundError } from "../helpers/apiError";
import Product, { ProductDocument } from "../models/Product";

const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return await product.save();
};

const getAllProductsService = async (): Promise<ProductDocument[]> => {
  return await Product.find();
};

const getProductByIdService = async (
  productId: string
): Promise<ProductDocument[]> => {
  const product = await Product.find({ _id: productId });
  if (!product) {
    throw new NotFoundError(`the product does not exist with the title ${productId}`)
  }
  return product;
};

const updateProductService = async (productId: string, update: Partial<ProductDocument> ) => {
 const updatedProduct = await Product.findByIdAndUpdate(productId, update, {new: true})
 if (!updatedProduct) {
  throw new NotFoundError(`could not find the product with id ${productId}`)
 }
 return updatedProduct;
};

const deleteProductByTitleService = async (productId: string) => {
 const deleteProduct = await Product.findByIdAndDelete(productId);
 if  (!deleteProduct) {
  throw new NotFoundError(`could not find the product with the id ${productId}`)
 }
 return deleteProduct;
}

export default {
  createProductService,
  getProductByIdService,
  getAllProductsService,
  updateProductService,
  deleteProductByTitleService,
};
