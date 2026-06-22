import { z } from "zod";

export const createOrderSchema = z.object({
  shipping_address: z.object({
    fullName: z.string().min(1, "Full name is required"),
    streetAddress: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    postalCode: z.string().min(1, "Postal code is required"),
    country: z.string().min(1, "Country is required"),
    phone: z.string().optional(),
  }),
  payment_method: z.string().optional(),
});

export const updateOrderStatusSchema = z.object({
  order_status: z.enum(["pending", "processing", "shipped", "delivered", "cancelled"]),
});

export const updatePaymentStatusSchema = z.object({
  payment_status: z.enum(["pending", "paid", "failed"]),
});
