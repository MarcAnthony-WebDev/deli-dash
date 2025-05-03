// src/components/DeliSection.tsx
type Deli = {
  name: string;
  address: string;
  description: string;
  phone: string;
  image: string;
};

export default function DeliSection({
  delis,
  showAll,
  setShowAll,
}: {
  delis: Deli[];
  showAll: boolean;
  setShowAll: (val: boolean) => void;
}) {
  const displayedDelis = showAll ? delis : delis.slice(0, 3);

  return (
    <>
      <div className="flex flex-col items-start px-30 pt-8 pb-3 gap-0">
        <h2 className="text-2xl font-semibold text-neutral-200">Delis Nearby</h2>
        <p className="text-neutral-400">There are {delis.length} delis in your area.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-30 pb-6">
        {displayedDelis.map((deli, index) => (
          <div key={index} className="bg-slate-600 rounded shadow p-4">
            <img
              src={deli.image}
              alt={deli.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2 text-neutral-300">{deli.name}</h2>
            <p className="text-sm text-white">{deli.address}</p>
            <p className="text-sm text-white">{deli.description}</p>
            <p className="text-sm font-mono text-white">{deli.phone}</p>
          </div>
        ))}
      </div>

      {delis.length > 3 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-neutral-600 text-neutral-300 px-6 py-2 rounded hover:bg-neutral-500 cursor-pointer transition-colors duration-300"
          >
            {showAll ? 'Show Less' : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
}

