
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/sonner';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const toast = useToast();
  
  // Get product by id
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
        <p className="mb-8 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button asChild variant="ghost" size="sm">
          <Link to="/shop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden bg-white shadow-md">
          <img 
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <Badge variant="secondary" className="mb-4 badge badge-secondary">
            {product.category}
          </Badge>
          
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="text-2xl font-bold mb-6">
            {formatCurrency(product.price)}
          </div>
          
          <Separator className="my-6" />
          
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <Button 
            size="lg" 
            className="w-full md:w-auto"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-4">Product Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Category</p>
                <p className="font-medium">{product.category}</p>
              </div>
              <div>
                <p className="text-gray-500">Product ID</p>
                <p className="font-medium">{product.id}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-500">Availability</p>
                <p className="font-medium text-green-600">In Stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
