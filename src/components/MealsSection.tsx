import { useState } from 'react';

type Meal = {
  name: string;
  image: string;
  price: string;
};

type MealsSectionProps = {
  meals: Meal[];
};

export default function MealsSection({ meals }: MealsSectionProps) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // Auto-close after 2s
  };

  if (meals.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center px-6 py-10 relative">
      {/* Modal */}
      {showModal && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow z-50">
          Item added successfully
        </div>
      )}

      <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-semibold text-neutral-200 mb-6">Popular Meals</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="w-[300px] bg-neutral-600 rounded shadow overflow-hidden flex flex-col"
            >
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col gap-1 flex-grow">
                <h3 className="text-neutral-200 font-semibold text-lg">{meal.name}</h3>
                <p className="text-neutral-400 text-sm">{meal.price}</p>
                <div className="mt-auto">
                  <button
                    className="mt-3 w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
