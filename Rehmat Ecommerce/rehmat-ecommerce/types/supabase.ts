export type Role = "admin" | "user";

export interface User {
  id: string; // UUID
  name: string;
  email: string;
  role: Role;
  created_at: string;
}

export interface Category {
  id: string; // UUID
  name: string;
  slug: string;
  created_at: string;
}

export interface Product {
  id: string; // UUID
  title: string;
  slug: string;
  description: string | null;
  price: number;
  stock: number;
  category_id: string | null;
  featured_image: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProductImage {
  id: string; // UUID
  product_id: string;
  image_url: string;
  created_at: string;
}

export interface Cart {
  id: string; // UUID
  user_id: string;
  created_at: string;
}

export interface CartItem {
  id: string; // UUID
  cart_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
}

export type PaymentStatus = "pending" | "paid" | "failed";
export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface Order {
  id: string; // UUID
  user_id: string | null;
  total_amount: number;
  payment_status: PaymentStatus;
  order_status: OrderStatus;
  shipping_address: any; // JSONB
  created_at: string;
}

export interface OrderItem {
  id: string; // UUID
  order_id: string;
  product_id: string | null;
  quantity: number;
  price: number;
  created_at: string;
}
