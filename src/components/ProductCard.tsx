
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product, useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="product-card h-full">
      <Link to={`/products/${product.id}`} className="hover:opacity-90 transition-opacity">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary" className="badge badge-secondary">
            {product.category}
          </Badge>
        </div>
        <Link to={`/products/${product.id}`} className="hover:underline">
          <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
        </Link>
        <p className="text-gray-500 text-sm line-clamp-2 min-h-[2.5rem]">{product.description}</p>
        <div className="mt-2 font-bold text-xl">{formatCurrency(product.price)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
