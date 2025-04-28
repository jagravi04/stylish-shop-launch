
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md border">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Thank You for Your Order!</h1>
        
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. You will receive an email confirmation shortly.
        </p>
        
        <p className="mb-2 font-medium">Order Number</p>
        <p className="text-xl font-bold mb-8">ORD-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
