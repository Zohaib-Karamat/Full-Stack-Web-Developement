"use client";

import Link from "next/link";
import { useState } from "react";
import { deleteProduct } from "@/app/actions/products";
import { Plus, Edit2, Trash2, Search } from "lucide-react";
import Image from "next/image";

export default function ProductsClient({ initialProducts }: { initialProducts: any[] }) {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    
    try {
      const res = await deleteProduct(id);
      if (res.error) throw new Error(res.error);
      setProducts(products.filter(p => p.id !== id));
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (p.categories?.name || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold font-inter text-black">Products</h1>
          <p className="text-sm font-poppins text-gray-500">Manage your inventory and catalog</p>
        </div>
        <Link
          href="/admin/products/new"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-poppins text-sm flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Product
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md font-poppins text-sm focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-poppins text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-gray-100 flex-shrink-0 relative overflow-hidden">
                          <Image 
                            src={product.featured_image || "https://placehold.co/100x100"} 
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="font-medium text-black truncate max-w-[200px]">{product.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{product.categories?.name || "Uncategorized"}</td>
                    <td className="px-6 py-4 text-black font-medium">${Number(product.price).toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.stock > 10 ? 'bg-green-100 text-green-700' :
                        product.stock > 0 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {product.stock} in stock
                      </span>
                    </td>
                    <td className="px-6 py-4 flex justify-end gap-3 items-center mt-2">
                      <Link href={`/admin/products/${product.id}/edit`} className="text-blue-500 hover:text-blue-700">
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
