
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from 'react-router-dom';
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center">
            <span className="text-white font-bold">ES</span>
          </div>
          <span className="text-xl font-bold text-gray-900">E-Shop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
          <Link to="/shop" className="text-gray-600 hover:text-gray-900 font-medium">Shop</Link>
          <Link to="/categories" className="text-gray-600 hover:text-gray-900 font-medium">Categories</Link>
          <Link to="/admin" className="text-gray-600 hover:text-gray-900 font-medium">Admin</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Cart Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cart.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.totalItems}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
                <SheetDescription>
                  {cart.totalItems === 0 
                    ? "Your cart is empty" 
                    : `You have ${cart.totalItems} item${cart.totalItems > 1 ? 's' : ''} in your cart`}
                </SheetDescription>
              </SheetHeader>
              <CartSidebar />
            </SheetContent>
          </Sheet>

          {/* Admin Avatar */}
          <Avatar className="hidden md:flex">
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-600 transition ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link to="/admin" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>Admin</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
