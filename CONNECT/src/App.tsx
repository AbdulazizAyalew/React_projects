import { useState } from 'react';
import './App.css';
import type { Product, CartItem } from './types';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cart'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        totalItems={totalItems}
        onCartClick={() => setCurrentPage('cart')}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentPage === 'home' ? (
          <HomePage onAddToCart={addToCart} />
        ) : (
          <CartPage
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onContinueShopping={() => setCurrentPage('home')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
