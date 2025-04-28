import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { toast } from '@/components/ui/sonner';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiration: '',
    cvv: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would process the payment via Stripe here
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      
      // Show success toast
      toast.success("Order Placed!", {
        description: "Your order has been successfully placed."
      });
      
      // Clear cart and redirect to success page
      clearCart();
      navigate('/order-success');
    }, 2000);
  };
  
  // Calculate order summary
  const shippingCost = 10;
  const taxes = cart.totalPrice * 0.08; // 8% tax
  const totalCost = cart.totalPrice + shippingCost + taxes;
  
  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
        <p className="mb-8 text-gray-600">Add some products to your cart before checkout.</p>
        <Button asChild>
          <Link to="/shop">Browse Products</Link>
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
            Continue Shopping
          </Link>
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Customer Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
              <h2 className="text-xl font-medium mb-4">Customer Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 text-sm">First Name</label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block mb-1 text-sm">Last Name</label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block mb-1 text-sm">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Shipping Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
              <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="address" className="block mb-1 text-sm">Street Address</label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block mb-1 text-sm">City</label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block mb-1 text-sm">ZIP / Postal Code</label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block mb-1 text-sm">Country</label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-medium mb-4">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Information
                </div>
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="cardNumber" className="block mb-1 text-sm">Card Number</label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 1234 1234 1234"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cardName" className="block mb-1 text-sm">Name on Card</label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiration" className="block mb-1 text-sm">Expiration (MM/YY)</label>
                    <Input
                      id="expiration"
                      name="expiration"
                      placeholder="MM/YY"
                      value={formData.expiration}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cvv" className="block mb-1 text-sm">CVV</label>
                    <Input
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? 'Processing...' : `Pay ${formatCurrency(totalCost)}`}
              </Button>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-24">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cart.items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded overflow-hidden mr-3">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">{formatCurrency(item.product.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">{formatCurrency(cart.totalPrice)}</p>
              </div>
              
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="font-medium">{formatCurrency(shippingCost)}</p>
              </div>
              
              <div className="flex justify-between">
                <p className="text-gray-600">Tax</p>
                <p className="font-medium">{formatCurrency(taxes)}</p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p>{formatCurrency(totalCost)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
