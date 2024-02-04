import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IProduct } from "./product.interface";
import httpStatus from "http-status";
import { ProductService } from "./product.service";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...ProductData } = req.body;
  console.log(ProductData);
  const result = await ProductService.CreateProduct(ProductData);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Created successfully",
    data: result,
  });
});

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProduct();

  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ProductService.getSingleProduct(id);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
});

const updateSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const upDatedData = req.body;

  const result = await ProductService.updateSingleProduct(id, upDatedData);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
};
