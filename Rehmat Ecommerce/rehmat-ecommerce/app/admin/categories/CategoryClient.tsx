"use client";

import { useState } from "react";
import { createCategory, updateCategory, deleteCategory } from "@/app/actions/categories";
import { Plus, Edit2, Trash2, X } from "lucide-react";

type Category = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
};

export default function CategoryClient({ initialCategories }: { initialCategories: Category[] }) {
  const [categories, setCategories] = useState(initialCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOpenModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
    } else {
      setEditingCategory(null);
    }
    setError("");
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);

    try {
      if (editingCategory) {
        const res = await updateCategory(editingCategory.id, formData);
        if (res.error) throw new Error(res.error);
        
        // Optimistic update
        setCategories(categories.map(c => 
          c.id === editingCategory.id 
            ? { ...c, name: formData.get("name") as string, slug: formData.get("slug") as string } 
            : c
        ));
      } else {
        const res = await createCategory(formData);
        if (res.error) throw new Error(res.error);
        // We could refetch, but revalidatePath will refresh the server component on next load.
        // For immediate feedback, we will just reload or let server component handle it by passing a router.refresh() 
        // Actually since we use state, it's better to just reload the page.
        window.location.reload();
      }
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    
    try {
      const res = await deleteCategory(id);
      if (res.error) throw new Error(res.error);
      setCategories(categories.filter(c => c.id !== id));
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-inter text-black">Categories</h1>
          <p className="text-sm font-poppins text-gray-500">Manage your product categories</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-poppins text-sm flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left font-poppins text-sm">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Slug</th>
              <th className="px-6 py-4 font-medium">Created At</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {categories.length > 0 ? (
              categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-black">{category.name}</td>
                  <td className="px-6 py-4 text-gray-500">{category.slug}</td>
                  <td className="px-6 py-4 text-gray-500">{new Date(category.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4 flex justify-end gap-3">
                    <button onClick={() => handleOpenModal(category)} className="text-blue-500 hover:text-blue-700">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(category.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">No categories found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold font-inter text-black">
                {editingCategory ? "Edit Category" : "Add New Category"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
              {error && <p className="text-red-500 text-sm font-poppins bg-red-50 p-2 rounded">{error}</p>}
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium font-poppins text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingCategory?.name}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 font-poppins text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="e.g. Electronics"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium font-poppins text-black">Slug</label>
                <input
                  type="text"
                  name="slug"
                  defaultValue={editingCategory?.slug}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 font-poppins text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="e.g. electronics"
                />
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-poppins text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-poppins text-sm disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
