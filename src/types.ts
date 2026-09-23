import { LucideIcon } from "lucide-react";

// Variant represents a specific color option
export type ProductVariant = {
  color: string;
  colorCode: string;
  image: string;
  stock: number;
};

// Size configuration with its own price, discount, and available variants
export type ProductSize = {
  size: string; // e.g., "S", "M", "L", "XL", or "One Size"
  price: number;
  discount?: number;
  variants: ProductVariant[]; // Colors available for this specific size
};

export type ProductColor = {
  name: string;
  code: string;
}

export type ProductType = {
  id: number;
  name: string;
  description: string;
  images: string[];
  category: string; 
  colors:  ProductColor[];
  // Each size has its own price, discount, and available colors
  sizes: ProductSize[];
  createdAt: string;
  imageSrc?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isArchived?: boolean;
};

export type ProductsType = ProductType[];

export type CategoryType = {
  name: string;
  icon: LucideIcon;
  slug: string;
};

export type CategoriesType = CategoryType[];

export type CartItemProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number; // Final price for this specific size/color combo
  discount: number;
  count: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartType = CartItemProps[];