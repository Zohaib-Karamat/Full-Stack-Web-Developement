"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createProductRecord, updateProductRecord } from "@/app/actions/products";
import { UploadCloud, X } from "lucide-react";
import Image from "next/image";

const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Price must be positive"),
  stock: z.coerce.number().int().min(0, "Stock must be positive"),
  category_id: z.string().uuid("Please select a category"),
});

type ProductFormData = z.infer<typeof productSchema>;

export default function ProductForm({ categories, initialData }: { categories: any[], initialData?: any }) {
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);
  
  // Try to load initial images from DB
  let initialImages: string[] = [];
  if (initialData?.product_images?.length) {
    initialImages = initialData.product_images.map((img: any) => img.image_url);
  } else if (initialData?.featured_image) {
    initialImages = [initialData.featured_image];
  }
  
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>(initialImages);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [keepExistingImages, setKeepExistingImages] = useState(!!initialData);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: initialData ? {
      title: initialData.title,
      description: initialData.description || "",
      price: initialData.price,
      stock: initialData.stock,
      category_id: initialData.category_id,
    } : undefined
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (keepExistingImages) {
        setKeepExistingImages(false); // If they upload new images, we'll overwrite existing ones for simplicity
        setImagePreviewUrls([]);
      }
      const filesArray = Array.from(e.target.files);
      setImages(prev => [...prev, ...filesArray]);
      
      const newPreviews = filesArray.map(file => URL.createObjectURL(file));
      setImagePreviewUrls(prev => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviewUrls(prev => {
      const newUrls = [...prev];
      if (newUrls[index].startsWith("blob:")) {
        URL.revokeObjectURL(newUrls[index]);
      }
      return newUrls.filter((_, i) => i !== index);
    });
  };

  const onSubmit = async (data: ProductFormData) => {
    try {
      setIsUploading(true);
      setError("");

      const uploadedUrls: string[] = [];

      // 1. Upload images to Cloudinary (only new File objects)
      for (const file of images) {
        const formData = new FormData();
        formData.append("file", file);
        
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadRes.json();
        if (!uploadRes.ok) throw new Error(uploadData.error || "Image upload failed");
        
        uploadedUrls.push(uploadData.url);
      }

      // 2. Save product to database
      if (initialData) {
        const res = await updateProductRecord(initialData.id, {
          ...data,
          images: keepExistingImages ? imagePreviewUrls : uploadedUrls,
          keepExistingImages
        });
        if (res.error) throw new Error(res.error);
      } else {
        const res = await createProductRecord({
          ...data,
          images: uploadedUrls
        });
        if (res.error) throw new Error(res.error);
      }

      router.push("/admin/products");
    } catch (err: any) {
      setError(err.message);
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl">
      <h2 className="text-xl font-bold font-inter text-black mb-6">{initialData ? "Edit Product" : "Add New Product"}</h2>
      
      {error && <div className="bg-red-50 text-red-500 p-3 rounded-md mb-6 font-poppins text-sm">{error}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Details */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium font-poppins text-black">Product Title *</label>
              <input 
                {...register("title")} 
                className="w-full border border-gray-300 rounded-md p-2.5 font-poppins text-sm focus:outline-none focus:ring-1 focus:ring-red-500" 
                placeholder="e.g. Wireless Headphones"
              />
              {errors.title && <span className="text-red-500 text-xs font-poppins">{errors.title?.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium font-poppins text-black">Description</label>
              <textarea 
                {...register("description")} 
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2.5 font-poppins text-sm focus:outline-none focus:ring-1 focus:ring-red-500" 
                placeholder="Describe the product..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium font-poppins text-black">Price ($) *</label>
                <input 
                  type="number" 
                  step="0.01"
                  {...register("price")} 
                  className="w-full border border-gray-300 rounded-md p-2.5 font-poppins text-sm focus:outline-none focus:ring-1 focus:ring-red-500" 
                />
                {errors.price && <span className="text-red-500 text-xs font-poppins">{errors.price?.message as string}</span>}
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium font-poppins text-black">Stock *</label>
                <input 
                  type="number" 
                  {...register("stock")} 
                  className="w-full border border-gray-300 rounded-md p-2.5 font-poppins text-sm focus:outline-none focus:ring-1 focus:ring-red-500" 
                />
                {errors.stock && <span className="text-red-500 text-xs font-poppins">{errors.stock?.message as string}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium font-poppins text-black">Category *</label>
              <select 
                {...register("category_id")} 
                className="w-full border border-gray-300 rounded-md p-2.5 font-poppins text-sm focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
              >
                <option value="">Select a category</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              {errors.category_id && <span className="text-red-500 text-xs font-poppins">{errors.category_id?.message as string}</span>}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium font-poppins text-black">Product Images</label>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative">
              <input 
                type="file" 
                multiple 
                accept="image/jpeg, image/png, image/webp" 
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <UploadCloud className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-sm font-poppins text-gray-600 font-medium">Click or drag images to upload</p>
              <p className="text-xs font-poppins text-gray-400 mt-1">PNG, JPG, WEBP up to 5MB</p>
              {initialData && keepExistingImages && <p className="text-xs text-red-500 mt-2 font-poppins">Uploading new images will replace existing ones.</p>}
            </div>

            {imagePreviewUrls.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-2">
                {imagePreviewUrls.map((url, i) => (
                  <div key={i} className="relative w-full aspect-square rounded-md overflow-hidden border border-gray-200">
                    <Image src={url} alt="Preview" fill className="object-cover" />
                    <button 
                      type="button" 
                      onClick={() => removeImage(i)}
                      className="absolute top-1 right-1 bg-white/80 p-1 rounded-full text-red-500 hover:bg-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-4 pt-6 border-t border-gray-200">
          <button 
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-poppins text-sm font-medium"
          >
            Cancel
          </button>
          <button 
            type="submit"
            disabled={isUploading}
            className="px-6 py-2.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-poppins text-sm font-medium disabled:opacity-50 flex items-center gap-2"
          >
            {isUploading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving...
              </>
            ) : initialData ? "Update Product" : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
