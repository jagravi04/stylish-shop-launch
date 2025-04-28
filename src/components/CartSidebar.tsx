
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartSidebar() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
        <p className="text-gray-500 text-lg">Your cart is empty</p>
        <Button asChild className="mt-6">
          <Link to="/shop">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto py-4">
        {cart.items.map((item) => (
          <div key={item.product.id} className="flex items-start py-4">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={item.product.imageUrl}
                alt={item.product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3 className="text-sm md:text-base">{item.product.name}</h3>
                <p className="ml-4 whitespace-nowrap">{formatCurrency(item.product.price)}</p>
              </div>
              <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                {item.product.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center border rounded">
                  <button
                    className="p-1"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="p-1"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 py-4">
        <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
          <p>Subtotal</p>
          <p>{formatCurrency(cart.totalPrice)}</p>
        </div>
        <div className="flex flex-col space-y-3">
          <Button asChild className="w-full">
            <Link to="/checkout">Checkout</Link>
          </Button>
          <Button variant="outline" onClick={clearCart} className="w-full">
            Clear Cart
          </Button>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>or</p>
          <Link to="/shop" className="font-medium text-brand hover:text-brand-dark">
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
