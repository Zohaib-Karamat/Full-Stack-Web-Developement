export const PRODUCTS_API_URL =
  "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json";

export type ApiProduct = {
  id: string;
  image: string;
  name: string;
  rating: {
    stars: number;
    count: number;
  };
  priceCents: number;
  category: string;
  subCategory: string;
  keywords: string[];
  description: string;
};

export type Product = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  subCategory: string;
  keywords: string[];
  description: string;
};

const fallbackProducts: ApiProduct[] = [
  {
    id: "1",
    image:
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/moisturizer.jpg",
    name: "Hydrating Facial Moisturizer",
    rating: { stars: 4.7, count: 120 },
    priceCents: 2000,
    category: "Beauty & Personal Care",
    subCategory: "Skincare",
    keywords: ["moisturizer", "hydration", "skincare", "beauty"],
    description:
      "This Hydrating Facial Moisturizer is expertly formulated to deeply nourish and hydrate your skin, providing lasting moisture and a smooth, radiant complexion. Ideal for daily use.",
  },
  {
    id: "11",
    image:
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/wireless-headphones.jpg",
    name: "Wireless Bluetooth Headphones",
    rating: { stars: 4.7, count: 230 },
    priceCents: 7999,
    category: "Electronics & Gadgets",
    subCategory: "Audio",
    keywords: ["headphones", "bluetooth", "audio", "electronics"],
    description:
      "Experience superior sound quality with these wireless Bluetooth headphones, designed for comfort and portability for everyday use.",
  },
  {
    id: "14",
    image:
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/laptop.jpg",
    name: "Gaming Laptop - 16GB RAM, 512GB SSD",
    rating: { stars: 4.9, count: 210 },
    priceCents: 120000,
    category: "Electronics & Gadgets",
    subCategory: "Computers",
    keywords: ["laptop", "gaming", "computers", "electronics"],
    description:
      "Unleash your gaming potential with this powerful gaming laptop featuring 16GB RAM and 512GB SSD for speed and performance.",
  },
  {
    id: "41",
    image:
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/treadmill.jpg",
    name: "Foldable Electric Treadmill",
    rating: { stars: 4.7, count: 320 },
    priceCents: 350000,
    category: "Health & Fitness",
    subCategory: "Fitness Equipment",
    keywords: ["treadmill", "fitness", "exercise", "home gym"],
    description:
      "This Foldable Electric Treadmill offers a convenient way to maintain fitness at home. With various speed settings and a compact design, it's perfect for beginners and seasoned athletes.",
  },
];

function toProduct(product: ApiProduct): Product {
  const price = Math.round(product.priceCents / 100);
  const hasCompareAt = Number(product.id) % 3 === 0;

  return {
    id: product.id,
    title: product.name,
    imageUrl: product.image,
    price,
    originalPrice: hasCompareAt ? Math.round(price * 1.25) : undefined,
    rating: product.rating.stars,
    reviewCount: product.rating.count,
    category: product.category,
    subCategory: product.subCategory,
    keywords: product.keywords,
    description: product.description,
  };
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(PRODUCTS_API_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Products API returned ${response.status}`);
    }

    const products = (await response.json()) as ApiProduct[];
    return products.map(toProduct);
  } catch {
    return fallbackProducts.map(toProduct);
  }
}

export async function getProductById(id?: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.id === id) ?? products[0];
}
