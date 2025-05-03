// src/components/Dashboard.tsx
import { useEffect, useState } from 'react'

type Deli = {
  name: string
  address: string
  description: string
  phone: string
  image: string
}

export default function Dashboard() {
  const [delis, setDelis] = useState<Deli[]>([])

  useEffect(() => {
    fetch('/delis.json')
      .then((res) => res.json())
      .then(setDelis)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {delis.map((deli, index) => (
        <div key={index} className="bg-white rounded shadow p-4">
          <img src={deli.image} alt={deli.name} className="w-full h-40 object-cover rounded" />
          <h2 className="text-lg font-bold mt-2">{deli.name}</h2>
          <p className="text-sm text-gray-700">{deli.address}</p>
          <p className="text-sm text-gray-500">{deli.description}</p>
          <p className="text-sm font-mono text-gray-600">{deli.phone}</p>
        </div>
      ))}
    </div>
  )
}
