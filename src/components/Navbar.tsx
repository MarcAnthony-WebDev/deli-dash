import { useState } from 'react';

export default function Navbar({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="bg-black px-6 py-4 flex items-center justify-between shadow">
      <div className="text-xl font-bold text-neutral-300">Deli Dash</div>

      <input
        type="text"
        placeholder="Search delis..."
        value={searchTerm}
        onChange={handleSearch}
        className="bg-neutral-700 text-white placeholder-gray-400 border border-neutral-600 rounded px-4 py-2 w-1/2"
      />

      <button className="bg-slate-600 text-neutral-300 px-4 py-2 rounded hover:bg-neutral-500">
        Login
      </button>
    </nav>
  );
}
