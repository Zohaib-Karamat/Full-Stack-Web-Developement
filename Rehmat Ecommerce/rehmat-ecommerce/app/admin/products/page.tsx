import { getAdminProducts } from "@/app/actions/products";
import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
  const products = await getAdminProducts();
  return <ProductsClient initialProducts={products} />;
}
