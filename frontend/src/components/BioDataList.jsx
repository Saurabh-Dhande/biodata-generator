export default function BioDataList({ biodata, onDelete }) {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this biodata?')) {
      onDelete(id)
    }
  }

  if (!biodata || biodata.length === 0) {
    return <div className="text-center text-gray-500 py-8">No biodata found</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {biodata.map((item) => (
        <div
          key={item.id}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md hover:shadow-lg transition p-6 border border-purple-100"
        >
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.religion}</p>
          </div>

          {/* Basic Info */}
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Age:</span>
              <span className="font-semibold text-gray-800">{item.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Gender:</span>
              <span className="font-semibold text-gray-800">{item.gender}</span>
            </div>
            {item.height && (
              <div className="flex justify-between">
                <span className="text-gray-600">Height:</span>
                <span className="font-semibold text-gray-800">{item.height}</span>
              </div>
            )}
            {item.location && (
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-semibold text-gray-800">{item.location}</span>
              </div>
            )}
            {item.education && (
              <div className="flex justify-between">
                <span className="text-gray-600">Education:</span>
                <span className="font-semibold text-gray-800">{item.education}</span>
              </div>
            )}
            {item.occupation && (
              <div className="flex justify-between">
                <span className="text-gray-600">Occupation:</span>
                <span className="font-semibold text-gray-800">{item.occupation}</span>
              </div>
            )}
          </div>

          {/* About Section */}
          {item.about && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 line-clamp-3">{item.about}</p>
            </div>
          )}

          {/* Timestamps */}
          <div className="text-xs text-gray-400 mb-4 space-y-1">
            {item.created_at && (
              <p>Created: {new Date(item.created_at).toLocaleDateString()}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => handleDelete(item.id)}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition text-sm"
            >
              Delete
            </button>
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
