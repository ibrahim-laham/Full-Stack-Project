// product controller here
import { Request, Response, NextFunction } from "express";

import productServices from "../services/products";
import Product from "../models/Product";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      title,
      artist,
      price,
      image,
      link,
      releaseDate,
      artistInfo,
      description,
      embedLink,
      totalTracks,
      genre,
      rating,
    } = req.body;

    const productInfo = new Product({
      title: title,
      artist: artist,
      price: price,
      image: image,
      link: link,
      releaseDate: releaseDate,
      artistInfo: artistInfo,
      description: description,
      embedLink: embedLink,
      totalTracks: totalTracks,
      genre: genre,
      rating: rating,
    });
    const product = await productServices.createProductService(productInfo);

    res.status(201).json({
      message: "create product",
      product: product,
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productList = await productServices.getAllProductsService();
    res.status(200).json({
      message: "get All product",
      product: productList,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const product = await productServices.getProductByIdService(productId);
    res.status(200).json({
      message: "get product by its id",
      foundProduct: product,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const update = req.body;
    const product = await productServices.updateProductService(
      productId,
      update
    );
    res.status(200).json({
      message: "update product",
      product: product,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    await productServices.deleteProductByTitleService(productId);
    const productList = await productServices.getAllProductsService();
    res.status(200).json({
      message: "product deleted",
      products: productList,
    });
  } catch (error) {
    next(error);
  }
};
