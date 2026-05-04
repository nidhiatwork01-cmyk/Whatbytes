export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    brand: "Nike",
    rating: 4,
    image: "/running_shoes_transparent_1777888814440.png",
    description: "Lightweight and comfortable running shoes for everyday use.",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 179,
    category: "Electronics",
    brand: "Sony",
    rating: 5,
    image: "/wireless_headphones_transparent_1777889177790.png",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    category: "Home",
    brand: "Samsonite",
    rating: 4,
    image: "/backpack_transparent_1777889710142.png",
    description: "Durable backpack with multiple compartments.",
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    category: "Electronics",
    brand: "Apple",
    rating: 5,
    image: "/smartwatch_transparent_1777889756676.png",
    description: "Feature-packed smartwatch with health tracking.",
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    category: "Clothing",
    brand: "RayBan",
    rating: 3,
    image: "/sunglasses_transparent_1777889904568.png",
    description: "UV-protected polarized sunglasses.",
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    brand: "Canon",
    rating: 4,
    image: "/camera_transparent_1777890141318.png",
    description: "Professional-grade digital camera with 24MP sensor.",
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    category: "Clothing",
    brand: "H&M",
    rating: 4,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400&h=400",
    description: "Soft cotton everyday t-shirt.",
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    category: "Electronics",
    brand: "Samsung",
    rating: 4,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400&h=600",
    description:
      "Lorem ipsum dolor amet, conssectetur euisagend. Experience the future of mobile technology with stunning display and camera.",
  },
];
