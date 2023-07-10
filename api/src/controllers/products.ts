// product controller here
import { Request, Response } from "express";

import productServices from "../services/products";
import Product from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  const productInfo = new Product({
    title: req.body.title,
    artist: req.body.artist,
    price: req.body.price,
    image: req.body.image,
    link: req.body.link,
    releaseDate: req.body.releaseDate,
  });
  const product = await productServices.createProductService(productInfo);

  res.status(200).json(product);
};

export const getProduct = async (req: Request, res: Response) => {
  const productList = await productServices.getAllProductsService();
  res.status(200).json({
    message: "get All product",
    product: productList,
  });
};

export const getProductByTitle = async (req: Request, res: Response) => {
  const productTitle = req.params.title;
  const product = await productServices.getProductByTitleService(productTitle);
  res.status(200).json({
    message: "get product by its title",
    foundProduct: product,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const updateValue: string = req.body.title;
  const product = await productServices.updateProductService(
    productId,
    updateValue
  );
  res.status(200).json({
    message: "update product",
    product: product,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const productTitle = req.params.title;
  await productServices.deleteProductByTitleService(productTitle);
  const productList = await productServices.getAllProductsService();
  res.status(200).json({
    message : "product deleted",
    products: productList,
  })
}
