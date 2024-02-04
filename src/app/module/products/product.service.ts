import { IProduct } from "./product.interface";
import ProductModel from "./product.model";

// * Create Product
const CreateProduct = async (payload: IProduct): Promise<IProduct | null> => {
  const result = await ProductModel.create(payload);
  return result;
};

const getAllProduct = async (): Promise<IProduct[] | null> => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await ProductModel.findById({ _id: id });
  return result;
};

// * Update Single User
const updateSingleProduct = async (
  id: string,
  payload: Partial<IProduct>
): Promise<IProduct | null> => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const ProductService = {
  CreateProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
};
