import type { Product } from '../types';
import { products } from '../data/products';
import ProductCard from './ProductCard';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

export default function HomePage({ onAddToCart }: HomePageProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Premium Laptops</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </>
  );
}
