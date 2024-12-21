// utils/api.ts
import { Product } from "@/types/Product";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('/products');
    if (!response.ok) {
      throw new Error('Get all products failed');
    }
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const createProduct = async (product: { name: string; description: string; imageUrl: string; price: number }) => {
  const response = await fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error("API error");
  }
  return response.json();
};