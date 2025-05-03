// src/components/CategoriesSection.tsx
const categories = [
    { name: 'Grocery', emoji: '🛒' },
    { name: 'Pizza', emoji: '🍕' },
    { name: 'Sushi', emoji: '🍣' },
    { name: 'Chinese', emoji: '🥡' },
    { name: 'Alcohol', emoji: '🍾' },
    { name: 'Thai', emoji: '🍜' },
    { name: 'Snacks', emoji: '🍟' },
    { name: 'Healthy', emoji: '🥗' },
    { name: 'Halal', emoji: '🥙' },
    { name: 'Soup', emoji: '🍲' },
    { name: 'Korean', emoji: '🍛' },
    { name: 'Indian', emoji: '🍛' },
  ];
  
  export default function CategoriesSection() {
    return (
      <div className="overflow-x-auto whitespace-nowrap px-6 py-4 bg-neutral-800">
        <div className="flex gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[70px] cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="text-3xl">{cat.emoji}</div>
              <p className="text-sm text-neutral-300 mt-1">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  