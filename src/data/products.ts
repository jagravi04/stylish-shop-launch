
import { Product } from '@/context/CartContext';

// Mock data for products
export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 199.99,
    description: "Premium noise-cancelling wireless headphones with 40 hours of battery life.",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Electronics"
  },
  {
    id: "2",
    name: "Smart Watch Series 7",
    price: 349.99,
    description: "Track your fitness goals, heart rate, and stay connected with this smartwatch.",
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    category: "Electronics"
  },
  {
    id: "3",
    name: "Ultra HD 4K Smart TV",
    price: 799.99,
    description: "Experience stunning visuals with this 55-inch Ultra HD Smart TV with HDR.",
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80",
    category: "Electronics"
  },
  {
    id: "4",
    name: "Premium Leather Jacket",
    price: 249.99,
    description: "Genuine leather jacket with quilted lining, perfect for all seasons.",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    category: "Clothing"
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    price: 159.99,
    description: "UV-protective designer sunglasses with polarized lenses.",
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "Accessories"
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    price: 49.99,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    imageUrl: "https://images.unsplash.com/photo-1618577809337-b7d0b820236b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Electronics"
  },
  {
    id: "7",
    name: "Premium Coffee Maker",
    price: 129.99,
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    imageUrl: "https://images.unsplash.com/photo-1585687433053-7a56a5e95d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Home"
  },
  {
    id: "8",
    name: "Ergonomic Office Chair",
    price: 299.99,
    description: "Adjustable office chair with lumbar support and breathable mesh back.",
    imageUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "Furniture"
  }
];

// Get all unique categories
export const categories = [...new Set(products.map(product => product.category))];

// Function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Function to get product by id
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
