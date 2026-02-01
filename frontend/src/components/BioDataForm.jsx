import { useState } from 'react'

export default function BioDataForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    // Personal Information
    photo: null,
    photoPreview: null,
    name: '',
    age: '',
    gender: '',
    dateOfBirth: '',
    complexion: '',
    height: '',
    weight: '',
    bloodGroup: '',

    // Family Background
    religion: '',
    caste: '',
    gotra: '',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    siblings: '',

    // Education & Career
    education: '',
    qualification: '',
    occupation: '',
    designation: '',
    annualIncome: '',
    company: '',

    // Location & Contact
    location: '',
    city: '',
    country: '',
    phone: '',
    email: '',

    // Additional Info
    hobbies: '',
    interests: '',
    about: '',
    expectations: '',
    maritalStatus: 'Never Married',

    // Extra Information
    extraInfo: [],

    // Additional Personal Info Fields
    additionalPersonal: [],

    // Additional Family Info Fields
    additionalFamily: [],
  })

  const addExtraField = () => {
    setFormData(prev => ({
      ...prev,
      extraInfo: [...prev.extraInfo, { label: '', value: '' }]
    }))
  }

  const removeExtraField = (index) => {
    setFormData(prev => ({
      ...prev,
      extraInfo: prev.extraInfo.filter((_, i) => i !== index)
    }))
  }

  const updateExtraField = (index, field, value) => {
    setFormData(prev => {
      const newExtraInfo = [...prev.extraInfo]
      newExtraInfo[index] = { ...newExtraInfo[index], [field]: value }
      return { ...prev, extraInfo: newExtraInfo }
    })
  }

  const addAdditionalPersonal = () => {
    setFormData(prev => ({
      ...prev,
      additionalPersonal: [...prev.additionalPersonal, { label: '', value: '' }]
    }))
  }

  const removeAdditionalPersonal = (index) => {
    setFormData(prev => ({
      ...prev,
      additionalPersonal: prev.additionalPersonal.filter((_, i) => i !== index)
    }))
  }

  const updateAdditionalPersonal = (index, field, value) => {
    setFormData(prev => {
      const newPersonal = [...prev.additionalPersonal]
      newPersonal[index] = { ...newPersonal[index], [field]: value }
      return { ...prev, additionalPersonal: newPersonal }
    })
  }

  const addAdditionalFamily = () => {
    setFormData(prev => ({
      ...prev,
      additionalFamily: [...prev.additionalFamily, { label: '', value: '' }]
    }))
  }

  const removeAdditionalFamily = (index) => {
    setFormData(prev => ({
      ...prev,
      additionalFamily: prev.additionalFamily.filter((_, i) => i !== index)
    }))
  }

  const updateAdditionalFamily = (index, field, value) => {
    setFormData(prev => {
      const newFamily = [...prev.additionalFamily]
      newFamily[index] = { ...newFamily[index], [field]: value }
      return { ...prev, additionalFamily: newFamily }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear field-level error when changed
    setErrors(prev => ({ ...prev, [name]: null }))
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          photo: file,
          photoPreview: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const removePhoto = () => {
    setFormData(prev => ({
      ...prev,
      photo: null,
      photoPreview: null
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate required fields with inline errors
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.age) newErrors.age = 'Age is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.religion) newErrors.religion = 'Religion is required'

    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      // scroll to top of form for visibility
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
      return
    }

    onSubmit(formData)
  }

  // Field-level errors state
  const [errors, setErrors] = useState({})

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      
      {/* Photo Upload Section */}
      <div className="photo-card p-6 mb-6 bg-white">
        <h3 className="text-xl font-bold text-indigo-700 mb-2">📸 Profile Photo</h3>
        <p className="text-sm muted mb-4">Upload a professional profile photo (Optional)</p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Photo Preview */}
          <div className="flex-shrink-0">
            <div className="w-32 h-40 bg-gray-100 rounded-lg overflow-hidden border-2 border-indigo-50 flex items-center justify-center">
              {formData.photoPreview ? (
                <img src={formData.photoPreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-4xl">📷</span>
              )}
            </div>
          </div>

          {/* Photo Upload Controls */}
          <div className="flex-1">
            <div className="border-2 border-dashed border-indigo-200 rounded-lg p-4 text-center bg-white hover:bg-indigo-50 transition cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                id="photoInput"
              />
              <label htmlFor="photoInput" className="cursor-pointer">
                <div className="text-3xl mb-2">🖼️</div>
                <p className="font-semibold text-gray-800 mb-1">Click to upload photo</p>
                <p className="text-xs muted">or drag and drop</p>
                <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 5MB</p>
              </label>
            </div>
            
            {formData.photoPreview && (
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={removePhoto}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  ❌ Remove Photo
                </button>
                <p className="text-sm text-green-600">✓ Photo selected</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 1: Personal Information */}
      <div className="border-b-2 border-purple-200 pb-6">
        <h3 className="text-xl font-bold text-purple-700 mb-6">👤 Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${errors.name ? 'border-red-400 focus:ring-2 focus:ring-red-300' : 'border-gray-300 focus:ring-2 focus:ring-purple-500'}`}
              placeholder="Enter your full name"
              required
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Age *</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`w-full px-4 py-2 border-2 rounded-lg ${errors.age ? 'border-red-400 focus:ring-2 focus:ring-red-300' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'}`}
              placeholder="Age"
              min="18"
              max="100"
              required
            />
            {errors.age && <p className="text-xs text-red-600 mt-1">{errors.age}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full px-4 py-2 border-2 rounded-lg ${errors.gender ? 'border-red-400 focus:ring-2 focus:ring-red-300' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'}`}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="text-xs text-red-600 mt-1">{errors.gender}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Height</label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., 5'8 inches"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Complexion</label>
            <select
              name="complexion"
              value={formData.complexion}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Complexion</option>
              <option value="Fair">Fair</option>
              <option value="Medium">Medium</option>
              <option value="Wheatish">Wheatish</option>
              <option value="Dark">Dark</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Marital Status</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="Never Married">Never Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
        </div>

        {/* Additional Personal Information Fields */}
        {formData.additionalPersonal.length > 0 && (
          <div className="mt-6 pt-6 border-t-2 border-purple-200">
            <p className="text-sm text-gray-600 mb-4 font-semibold">Additional Personal Details:</p>
            <div className="space-y-4">
              {formData.additionalPersonal.map((field, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <div className="md:col-span-1">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">Field Label</label>
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => updateAdditionalPersonal(index, 'label', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        placeholder="e.g., Weight, Ethnicity"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">Value</label>
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) => updateAdditionalPersonal(index, 'value', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        placeholder="e.g., 65 kg, Asian"
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeAdditionalPersonal(index)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition text-sm"
                    >
                      ❌ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={addAdditionalPersonal}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition text-sm"
          >
            ➕ Add More
          </button>
        </div>
      </div>

      {/* Section 2: Family Background */}
      <div className="border-b-2 border-purple-200 pb-6">
        <h3 className="text-xl font-bold text-purple-700 mb-6">👨‍👩‍👧‍👦 Family Background</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Religion *</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Jain">Jain</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Caste</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Caste (if applicable)"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Gotra</label>
            <input
              type="text"
              name="gotra"
              value={formData.gotra}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Gotra (if applicable)"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Father's full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Father's Occupation</label>
            <input
              type="text"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Occupation"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Mother's full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Mother's Occupation</label>
            <input
              type="text"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Occupation"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Number of Siblings</label>
            <input
              type="number"
              name="siblings"
              value={formData.siblings}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Number of siblings"
              min="0"
            />
          </div>
        </div>

        {/* Additional Family Information Fields */}
        {formData.additionalFamily.length > 0 && (
          <div className="mt-6 pt-6 border-t-2 border-purple-200">
            <p className="text-sm text-gray-600 mb-4 font-semibold">Additional Family Details:</p>
            <div className="space-y-4">
              {formData.additionalFamily.map((field, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <div className="md:col-span-1">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">Field Label</label>
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => updateAdditionalFamily(index, 'label', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        placeholder="e.g., Ancestral Place, Family Background"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">Value</label>
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) => updateAdditionalFamily(index, 'value', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        placeholder="e.g., Gujarat, Business Family"
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeAdditionalFamily(index)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition text-sm"
                    >
                      ❌ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={addAdditionalFamily}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition text-sm"
          >
            ➕ Add More
          </button>
        </div>
      </div>

      {/* Section 3: Education & Career */}
      <div className="border-b-2 border-purple-200 pb-6">
        <h3 className="text-xl font-bold text-purple-700 mb-6">🎓 Education & Career</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Education</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., Bachelor of Technology"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., B.Tech in IT"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., Software Engineer"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Current designation"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Company / Organization</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Annual Income</label>
            <input
              type="text"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., 10-15 LPA"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Location & Contact */}
      <div className="border-b-2 border-purple-200 pb-6">
        <h3 className="text-xl font-bold text-purple-700 mb-6">📍 Location & Contact</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="City"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">State / Province</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="State or Province"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Country"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Phone number"
            />
          </div>
        </div>
      </div>

      {/* Section 5: Additional Information */}
      <div>
        <h3 className="text-xl font-bold text-purple-700 mb-6">✨ Additional Information</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Hobbies & Interests</label>
            <textarea
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., Reading, Traveling, Cooking..."
              rows="2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">About Me</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Tell about yourself..."
              rows="3"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">What You're Looking For</label>
            <textarea
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your expectations and preferences..."
              rows="3"
            />
          </div>
        </div>
      </div>

      {/* Section 6: Extra Information */}
      <div className="border-t-2 border-purple-200 pt-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-purple-700">➕ Additional Custom Information</h3>
          <button
            type="button"
            onClick={addExtraField}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            + Add Field
          </button>
        </div>

        {formData.extraInfo.length === 0 ? (
          <p className="text-gray-600 italic text-sm mb-4">
            No additional fields added yet. Click "+ Add Field" to add custom information like language, dietary preferences, health details, etc.
          </p>
        ) : (
          <div className="space-y-4">
            {formData.extraInfo.map((field, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="md:col-span-1">
                    <label className="block text-gray-700 font-semibold mb-2">Field Label</label>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) => updateExtraField(index, 'label', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Language, Dietary Preference"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">Value</label>
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) => updateExtraField(index, 'value', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Hindi, English, Vegetarian, Jain"
                    />
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => removeExtraField(index)}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded transition text-sm"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex gap-2 md:gap-4 justify-center pt-4 md:pt-6 px-2">
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 md:py-3 px-6 md:px-12 rounded-lg transition transform hover:scale-105 text-sm md:text-lg w-full md:w-auto"
        >
          📄 Generate PDF Biodata
        </button>
      </div>

      <div className="text-center text-sm text-gray-600 pt-4">
        <p>* Required fields must be filled</p>
      </div>
    </form>
  )
}
