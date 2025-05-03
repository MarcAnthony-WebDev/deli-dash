import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import DeliSection from './DeliSection';
import PromoBanner from './PromoBanner';
import CategoriesSection from './CategoriesSection';
import MealsSection from './MealsSection';
import Footer from './Footer';
import { ShoppingCart } from 'lucide-react'; // or replace with emoji if not using lucide

type Meal = {
  name: string;
  image: string;
  price: string;
};

type Deli = {
  name: string;
  address: string;
  description: string;
  phone: string;
  image: string;
  meals?: Meal[];
};

export default function Dashboard() {
  const [delis, setDelis] = useState<Deli[]>([]);
  const [filtered, setFiltered] = useState<Deli[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch('/delis.json')
      .then((res) => res.json())
      .then((data) => {
        setDelis(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (query: string) => {
    const lower = query.toLowerCase();
    const filteredList = delis.filter(
      (deli) =>
        deli.name.toLowerCase().includes(lower) ||
        deli.address.toLowerCase().includes(lower) ||
        deli.description.toLowerCase().includes(lower)
    );
    setFiltered(filteredList);
    setShowAll(false);
  };

  const allMeals = filtered.flatMap((deli) => deli.meals || []);

  return (
    <div className="w-full min-h-screen bg-neutral-700 relative">
      <Navbar onSearch={handleSearch} />
      <CategoriesSection />

      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">No results found.</p>
      ) : (
        <>
          <DeliSection delis={filtered} showAll={showAll} setShowAll={setShowAll} />
          <MealsSection meals={allMeals} />
        </>
      )}

      <PromoBanner />
      <Footer />

      {/* Floating Cart Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="relative bg-slate-600 hover:bg-slate-500 text-white p-4 rounded-full shadow-lg">
        <span role="img" aria-label="cart">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
