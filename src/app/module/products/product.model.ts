import mongoose, { Model, Schema } from "mongoose";

import { IProduct } from "./product.interface";

const ProductSchema: Schema<IProduct> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const ProductModel: Model<IProduct> = mongoose.model("Product", ProductSchema);

export default ProductModel;
