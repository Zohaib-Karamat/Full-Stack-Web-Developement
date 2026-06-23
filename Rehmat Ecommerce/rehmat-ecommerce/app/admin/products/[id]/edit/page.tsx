export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { getCategories } from "@/app/actions/categories";
import { getAdminProductById } from "@/app/actions/products";
import { notFound } from "next/navigation";
import ProductForm from "../../new/ProductForm";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const categories = await getCategories();
  let product;
  try {
    product = await getAdminProductById(resolvedParams.id);
  } catch (e) {
    notFound();
    return null;
  }
  if (!product) {
    notFound();
    return null;
  }
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold font-inter text-black">Edit Product</h1>
      <ProductForm categories={categories} initialData={product} />
    </div>
  );
}
