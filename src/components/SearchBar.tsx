// src/components/SearchBar.tsx
type Props = {
    onSearch: (value: string) => void
  }
  
  export default function SearchBar({ onSearch }: Props) {
    return (
      <div className="w-full max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search delis..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>
    )
  }
  