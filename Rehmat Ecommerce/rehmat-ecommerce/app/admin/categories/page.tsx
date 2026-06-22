import { getCategories } from "@/app/actions/categories";
import CategoryClient from "./CategoryClient";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return <CategoryClient initialCategories={categories} />;
}
