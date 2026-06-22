import { getCategories } from "@/app/actions/categories";
import ProductForm from "./ProductForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function NewProductPage() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-6">
      <Link href="/admin/products" className="flex items-center gap-2 text-sm font-poppins text-gray-500 hover:text-black w-fit">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>
      
      <ProductForm categories={categories} />
    </div>
  );
}
