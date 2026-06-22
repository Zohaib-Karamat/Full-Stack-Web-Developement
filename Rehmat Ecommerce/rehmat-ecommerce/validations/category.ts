import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  slug: z.string().optional(), // Can be auto-generated from name
});

export const updateCategorySchema = createCategorySchema.partial();
