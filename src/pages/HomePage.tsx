
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  // Featured products - first 4 products
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-brand py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Shop the Latest Trends</h1>
            <p className="text-xl mb-8">
              Discover amazing products at unbeatable prices. 
              Quality guaranteed with fast shipping!
            </p>
            <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100 hover:text-brand-dark">
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-shop-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Check out our most popular items</p>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
            <p className="text-gray-600">Browse our collection by category</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(category => (
              <Link 
                to={`/categories/${category}`} 
                key={category} 
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition group"
              >
                <div className="h-24 flex items-center justify-center mb-4">
                  <span className="text-4xl">
                    {category === 'Electronics' ? '🔌' : 
                     category === 'Clothing' ? '👕' : 
                     category === 'Accessories' ? '👜' : 
                     category === 'Home' ? '🏠' : 
                     category === 'Furniture' ? '🪑' : '🛍️'}
                  </span>
                </div>
                <h3 className="text-lg font-medium group-hover:text-brand transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience our quality products and exceptional service.
          </p>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand">
            <Link to="/shop">Explore the Shop</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
