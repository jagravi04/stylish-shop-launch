
import { Link } from 'react-router-dom';
import { categories, getProductsByCategory } from '@/data/products';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      
      {categories.map(category => {
        const categoryProducts = getProductsByCategory(category).slice(0, 4);
        
        return (
          <section key={category} className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{category}</h2>
              <Button asChild variant="outline">
                <Link to={`/categories/${category}`}>View All</Link>
              </Button>
            </div>
            
            <div className="product-grid">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {categoryProducts.length === 0 && (
              <div className="py-8 text-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">No products available in this category</p>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
