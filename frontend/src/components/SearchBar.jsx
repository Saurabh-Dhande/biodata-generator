import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    name: '',
    age: '',
    gender: '',
    religion: '',
    location: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = {
      ...searchParams,
      [name]: value
    }
    setSearchParams(updated)
    onSearch(updated)
  }

  const handleReset = () => {
    setSearchParams({
      name: '',
      age: '',
      gender: '',
      religion: '',
      location: ''
    })
    onSearch({})
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Search Biodata</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Name Search */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={searchParams.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            placeholder="Search by name"
          />
        </div>

        {/* Age Search */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">Age</label>
          <input
            type="number"
            name="age"
            value={searchParams.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            placeholder="Search by age"
          />
        </div>

        {/* Gender Search */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">Gender</label>
          <select
            name="gender"
            value={searchParams.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Religion Search */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">Religion</label>
          <select
            name="religion"
            value={searchParams.religion}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          >
            <option value="">All</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Jain">Jain</option>
          </select>
        </div>

        {/* Location Search */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">Location</label>
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            placeholder="Search by location"
          />
        </div>
      </div>

      {/* Reset Button */}
      <div>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition text-sm"
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}
