import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import DeliSection from './DeliSection';
import PromoBanner from './PromoBanner';
import CategoriesSection from './CategoriesSection';
import MealsSection from './MealsSection';

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
    <div className="w-full min-h-screen bg-neutral-700">
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
    </div>
  );
}
