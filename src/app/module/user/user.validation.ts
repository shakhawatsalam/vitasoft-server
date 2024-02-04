import { z } from "zod";

// * User Create Zod Schema
const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "name is Required",
    }),
    profile_picture: z.string({
      required_error: "profile_picture is Required",
    }),
    phone_number: z.string({
      required_error: "phone_number is Required",
    }),
    description: z.string({
      required_error: "description is Required",
    }),
    birthdate: z.string({
      required_error: "birthdate is Required",
    }),
    joining_date: z.string({
      required_error: "joining_date is Required",
    }),
    active_status: z.boolean({
      required_error: "active_status is Required",
    }),
  }),
});

// * Update User Zod Schema
const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    profile_picture: z.string().optional(),
    phone_number: z.string().optional(),
    description: z.string().optional(),
    birthdate: z.string().optional(),
    joining_date: z.string().optional(),
    active_status: z.boolean().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
