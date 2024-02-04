import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    profile_picture: { type: String, required: true },
    phone_number: { type: String, required: true },
    description: { type: String, required: true },
    birthdate: { type: String, required: true },
    joining_date: { type: String, required: true },
    active_status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const userModel: Model<IUser> = mongoose.model("User", UserSchema);

export default userModel;
