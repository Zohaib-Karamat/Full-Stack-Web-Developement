import { z } from "zod";

export const createProductSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().min(3, "Slug is required").optional(), // We can auto-generate this if missing
  description: z.string().optional(),
  price: z.number().positive("Price must be greater than 0"),
  stock: z.number().int().nonnegative("Stock cannot be negative").default(0),
  category_id: z.string().uuid("Invalid category ID").optional(),
  featured_image: z.string().url("Invalid image URL").optional(),
});

export const updateProductSchema = createProductSchema.partial();
