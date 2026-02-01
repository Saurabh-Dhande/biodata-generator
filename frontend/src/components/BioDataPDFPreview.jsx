import { forwardRef } from 'react'

const BioDataPDFPreview = forwardRef(({ data, template }, ref) => {
  // Template 1: Classic Traditional Design
  const ClassicTemplate = () => (
    <div ref={ref} className="w-full bg-white p-12 text-gray-800" style={{ fontSize: '12px', lineHeight: '1.6', color: '#333' }}>
      {/* Header */}
      <div className="border-b-4 border-purple-700 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-center text-purple-900 mb-1">MATRIMONIAL BIODATA</h1>
        <div className="flex justify-center gap-8 text-sm mt-3">
          <span className="font-semibold">📅 {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Personal Info Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">PERSONAL INFORMATION</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="font-bold">Name:</span> {data.name}</div>
          <div><span className="font-bold">Age:</span> {data.age} years</div>
          <div><span className="font-bold">Gender:</span> {data.gender}</div>
          <div><span className="font-bold">Date of Birth:</span> {data.dateOfBirth || 'Not provided'}</div>
          <div><span className="font-bold">Height:</span> {data.height || 'Not provided'}</div>
          <div><span className="font-bold">Complexion:</span> {data.complexion || 'Not provided'}</div>
          <div><span className="font-bold">Blood Group:</span> {data.bloodGroup || 'Not provided'}</div>
          <div><span className="font-bold">Marital Status:</span> {data.maritalStatus}</div>
          {data.additionalPersonal && data.additionalPersonal.map((item, idx) => (
            item.label && item.value && (
              <div key={idx}><span className="font-bold">{item.label}:</span> {item.value}</div>
            )
          ))}
        </div>
      </div>

      {/* Family Background */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">FAMILY BACKGROUND</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="font-bold">Religion:</span> {data.religion}</div>
          <div><span className="font-bold">Caste:</span> {data.caste || 'Not provided'}</div>
          <div><span className="font-bold">Gotra:</span> {data.gotra || 'Not provided'}</div>
          <div><span className="font-bold">Father's Name:</span> {data.fatherName || 'Not provided'}</div>
          <div><span className="font-bold">Father's Occupation:</span> {data.fatherOccupation || 'Not provided'}</div>
          <div><span className="font-bold">Mother's Name:</span> {data.motherName || 'Not provided'}</div>
          <div><span className="font-bold">Mother's Occupation:</span> {data.motherOccupation || 'Not provided'}</div>
          <div><span className="font-bold">Siblings:</span> {data.siblings || 'Not provided'}</div>
          {data.additionalFamily && data.additionalFamily.map((item, idx) => (
            item.label && item.value && (
              <div key={idx}><span className="font-bold">{item.label}:</span> {item.value}</div>
            )
          ))}
          <div><span className="font-bold">Siblings:</span> {data.siblings || 'Not provided'}</div>
        </div>
      </div>

      {/* Education & Career */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">EDUCATION & CAREER</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="font-bold">Education:</span> {data.education || 'Not provided'}</div>
          <div><span className="font-bold">Qualification:</span> {data.qualification || 'Not provided'}</div>
          <div><span className="font-bold">Occupation:</span> {data.occupation || 'Not provided'}</div>
          <div><span className="font-bold">Designation:</span> {data.designation || 'Not provided'}</div>
          <div><span className="font-bold">Company:</span> {data.company || 'Not provided'}</div>
          <div><span className="font-bold">Annual Income:</span> {data.annualIncome || 'Not provided'}</div>
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">LOCATION</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="font-bold">City:</span> {data.city || 'Not provided'}</div>
          <div><span className="font-bold">State:</span> {data.location || 'Not provided'}</div>
          <div><span className="font-bold">Country:</span> {data.country || 'Not provided'}</div>
          <div><span className="font-bold">Email:</span> {data.email || 'Not provided'}</div>
          <div><span className="font-bold">Phone:</span> {data.phone || 'Not provided'}</div>
        </div>
      </div>

      {/* Additional Info */}
      {(data.about || data.hobbies || data.expectations) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">ADDITIONAL INFORMATION</h2>
          {data.hobbies && <div className="mb-3 text-sm"><span className="font-bold">Hobbies & Interests:</span> {data.hobbies}</div>}
          {data.about && <div className="mb-3 text-sm"><span className="font-bold">About Me:</span> {data.about}</div>}
          {data.expectations && <div className="text-sm"><span className="font-bold">Looking For:</span> {data.expectations}</div>}
        </div>
      )}

      {/* Extra Information */}
      {data.extraInfo && data.extraInfo.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">ADDITIONAL DETAILS</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {data.extraInfo.map((item, idx) => (
              item.label && item.value && (
                <div key={idx}><span className="font-bold">{item.label}:</span> {item.value}</div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t-2 border-purple-300 pt-4 mt-8 text-center text-xs text-gray-600">
        <p>This biodata is prepared for matrimonial purposes only.</p>
      </div>
    </div>
  )

  // Template 2: Modern Minimalist Design
  const ModernTemplate = () => (
    <div ref={ref} className="w-full bg-white p-10 text-gray-800" style={{ fontSize: '11px', lineHeight: '1.5' }}>
      {/* Header */}
      <div className="flex justify-between items-start mb-8 pb-6 border-b-2 border-gray-300">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
          <p className="text-gray-600 text-sm mt-1">{data.age} years • {data.gender} • {data.location || 'Location'}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Biodata ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          <p className="text-xs text-gray-500 mt-1">{new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Personal</h3>
            <div className="space-y-1 text-xs">
              <div className="flex"><span className="w-20 font-semibold">Height:</span><span>{data.height || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Complexion:</span><span>{data.complexion || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Blood Group:</span><span>{data.bloodGroup || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">DOB:</span><span>{data.dateOfBirth || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Marital:</span><span>{data.maritalStatus}</span></div>
              {data.additionalPersonal && data.additionalPersonal.map((item, idx) => (
                item.label && item.value && (
                  <div key={idx} className="flex"><span className="w-20 font-semibold">{item.label}:</span><span>{item.value}</span></div>
                )
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Family</h3>
            <div className="space-y-1 text-xs">
              <div className="flex"><span className="w-20 font-semibold">Religion:</span><span>{data.religion}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Caste:</span><span>{data.caste || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Father:</span><span>{data.fatherName || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Mother:</span><span>{data.motherName || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Siblings:</span><span>{data.siblings || '—'}</span></div>
              {data.additionalFamily && data.additionalFamily.map((item, idx) => (
                item.label && item.value && (
                  <div key={idx} className="flex"><span className="w-20 font-semibold">{item.label}:</span><span>{item.value}</span></div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Career</h3>
            <div className="space-y-1 text-xs">
              <div className="flex"><span className="w-20 font-semibold">Education:</span><span>{data.education || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Qualification:</span><span>{data.qualification || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Occupation:</span><span>{data.occupation || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Designation:</span><span>{data.designation || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Income:</span><span>{data.annualIncome || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Company:</span><span>{data.company || '—'}</span></div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Contact</h3>
            <div className="space-y-1 text-xs">
              <div className="flex"><span className="w-20 font-semibold">City:</span><span>{data.city || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">State:</span><span>{data.location || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Country:</span><span>{data.country || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Email:</span><span className="break-all">{data.email || '—'}</span></div>
              <div className="flex"><span className="w-20 font-semibold">Phone:</span><span>{data.phone || '—'}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      {(data.about || data.hobbies || data.expectations) && (
        <div className="mt-6 pt-6 border-t border-gray-300">
          {data.about && (
            <div className="mb-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">About</h3>
              <p className="text-xs text-gray-700">{data.about}</p>
            </div>
          )}
          {data.hobbies && (
            <div className="mb-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Interests</h3>
              <p className="text-xs text-gray-700">{data.hobbies}</p>
            </div>
          )}
          {data.expectations && (
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Looking For</h3>
              <p className="text-xs text-gray-700">{data.expectations}</p>
            </div>
          )}
        </div>
      )}

      {/* Extra Information - Modern */}
      {data.extraInfo && data.extraInfo.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-300">
          <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Additional Details</h3>
          <div className="grid grid-cols-2 gap-2">
            {data.extraInfo.map((item, idx) => (
              item.label && item.value && (
                <div key={idx} className="text-xs">
                  <span className="font-semibold text-gray-900">{item.label}:</span> {item.value}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
        <p>Generated for matrimonial purposes • Confidential</p>
      </div>
    </div>
  )

  // Template 3: Traditional Gold Design
  const TraditionalTemplate = () => (
    <div ref={ref} className="w-full bg-amber-50 p-12 text-gray-900" style={{ fontSize: '12px', lineHeight: '1.8' }}>
      {/* Header with Decorative Border */}
      <div className="border-4 border-amber-700 bg-gradient-to-r from-amber-100 to-yellow-50 p-6 mb-8 text-center rounded">
        <div className="border-b-2 border-amber-700 pb-4 mb-4">
          <h1 className="text-4xl font-bold text-amber-900" style={{ fontFamily: 'serif' }}>वैवाहिक जीवनचरित्र</h1>
          <p className="text-amber-800 font-semibold mt-2">MATRIMONIAL BIODATA</p>
        </div>
        <p className="text-amber-700 text-xs">Prepared on {new Date().toLocaleDateString()}</p>
      </div>

      {/* Section 1 */}
      <div className="bg-amber-100 bg-opacity-40 p-4 mb-6 rounded border-l-4 border-amber-700">
        <h2 className="text-lg font-bold text-amber-900 mb-4" style={{ fontFamily: 'serif' }}>सामान्य जानकारी</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">नाम (Name):</span> {data.name}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">आयु (Age):</span> {data.age} वर्ष
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">लिंग (Gender):</span> {data.gender}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">जन्म तिथि (DOB):</span> {data.dateOfBirth || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">कद (Height):</span> {data.height || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">रंग (Complexion):</span> {data.complexion || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">रक्त समूह (Blood):</span> {data.bloodGroup || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">वैवाहिक स्थिति:</span> {data.maritalStatus}
          </div>
          {data.additionalPersonal && data.additionalPersonal.map((item, idx) => (
            item.label && item.value && (
              <div key={idx} className="border-b border-amber-300 pb-2">
                <span className="font-bold text-amber-900">{item.label}:</span> {item.value}
              </div>
            )
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-amber-100 bg-opacity-40 p-4 mb-6 rounded border-l-4 border-amber-700">
        <h2 className="text-lg font-bold text-amber-900 mb-4" style={{ fontFamily: 'serif' }}>पारिवारिक पृष्ठभूमि</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">धर्म (Religion):</span> {data.religion}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">जाति (Caste):</span> {data.caste || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">पिता (Father):</span> {data.fatherName || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">माता (Mother):</span> {data.motherName || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">पिता का व्यवसाय:</span> {data.fatherOccupation || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">माता का व्यवसाय:</span> {data.motherOccupation || 'N/A'}
          </div>
          {data.additionalFamily && data.additionalFamily.map((item, idx) => (
            item.label && item.value && (
              <div key={idx} className="border-b border-amber-300 pb-2">
                <span className="font-bold text-amber-900">{item.label}:</span> {item.value}
              </div>
            )
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-amber-100 bg-opacity-40 p-4 mb-6 rounded border-l-4 border-amber-700">
        <h2 className="text-lg font-bold text-amber-900 mb-4" style={{ fontFamily: 'serif' }}>शिक्षा & व्यवसाय</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">शिक्षा (Education):</span> {data.education || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">योग्यता (Qualification):</span> {data.qualification || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">व्यवसाय (Occupation):</span> {data.occupation || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">पद (Designation):</span> {data.designation || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">आय (Income):</span> {data.annualIncome || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">कंपनी (Company):</span> {data.company || 'N/A'}
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-amber-100 bg-opacity-40 p-4 mb-6 rounded border-l-4 border-amber-700">
        <h2 className="text-lg font-bold text-amber-900 mb-4" style={{ fontFamily: 'serif' }}>निवास स्थान</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">शहर (City):</span> {data.city || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">राज्य (State):</span> {data.location || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">देश (Country):</span> {data.country || 'N/A'}
          </div>
          <div className="border-b border-amber-300 pb-2">
            <span className="font-bold text-amber-900">ईमेल (Email):</span> {data.email || 'N/A'}
          </div>
        </div>
      </div>

      {/* About */}
      {data.about && (
        <div className="bg-amber-100 bg-opacity-40 p-4 mb-6 rounded border-l-4 border-amber-700">
          <h2 className="text-lg font-bold text-amber-900 mb-4" style={{ fontFamily: 'serif' }}>व्यक्तिगत परिचय</h2>
          <p className="text-sm text-gray-900 leading-relaxed">{data.about}</p>
        </div>
      )}

      {/* Extra Information - Traditional */}
      {data.extraInfo && data.extraInfo.length > 0 && (
        <div className="bg-amber-100 bg-opacity-40 p-4 mb-6 rounded border-l-4 border-amber-700">
          <h2 className="text-lg font-bold text-amber-900 mb-4" style={{ fontFamily: 'serif' }}>अतिरिक्त जानकारी</h2>
          <div className="space-y-2">
            {data.extraInfo.map((item, idx) => (
              item.label && item.value && (
                <div key={idx} className="text-sm border-b border-amber-300 pb-2">
                  <span className="font-bold text-amber-900">{item.label}:</span> {item.value}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t-4 border-amber-700 pt-4 text-center text-xs text-amber-900">
        <p style={{ fontFamily: 'serif' }} className="font-semibold">🙏 विवाह प्रयोजन के लिए तैयार किया गया है 🙏</p>
        <p className="text-amber-800 mt-1">Prepared for matrimonial purposes only</p>
      </div>
    </div>
  )

  // Template 4: Premium Gold Elegant Design (Mandatory Fields Only)
  const PremiumGoldTemplate = () => (
    <div ref={ref} className="w-full bg-white p-12 text-gray-800" style={{ fontSize: '11px', lineHeight: '1.8' }}>
      {/* Decorative Top Border */}
      <div className="border-t-8 border-yellow-600 mb-8"></div>
      
      {/* Header with Gold Accent */}
      <div className="text-center mb-10 pb-8 border-b-2 border-yellow-300">
        <h1 className="text-4xl font-bold text-yellow-700 mb-2" style={{ fontFamily: 'serif' }}>
          MATRIMONIAL BIODATA
        </h1>
        <p className="text-yellow-600 text-sm font-italic">Professional Profile for Matrimonial Purpose</p>
        <p className="text-gray-500 text-xs mt-3">📅 {new Date().toLocaleDateString()}</p>
      </div>

      {/* Main Content - Only Mandatory/Important Fields */}
      <div className="space-y-8">
        {/* Personal Details Section */}
        <div>
          <h2 className="text-sm font-bold text-yellow-700 uppercase tracking-wider border-b-2 border-yellow-300 pb-2 mb-4">Personal Profile</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Full Name</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.name}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Age</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.age} years</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Gender</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.gender}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Height</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.height || 'N/A'}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Religion</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.religion}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Marital Status</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.maritalStatus}</p>
            </div>
          </div>
        </div>

        {/* Family Information */}
        <div>
          <h2 className="text-sm font-bold text-yellow-700 uppercase tracking-wider border-b-2 border-yellow-300 pb-2 mb-4">Family Background</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Father's Name</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.fatherName || 'N/A'}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Mother's Name</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.motherName || 'N/A'}</p>
            </div>
            {data.caste && (
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-gray-500 text-xs uppercase tracking-wide">Caste</p>
                <p className="text-base font-semibold text-gray-900 mt-1">{data.caste}</p>
              </div>
            )}
            {data.gotra && (
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-gray-500 text-xs uppercase tracking-wide">Gotra</p>
                <p className="text-base font-semibold text-gray-900 mt-1">{data.gotra}</p>
              </div>
            )}
          </div>
        </div>

        {/* Professional Information */}
        <div>
          <h2 className="text-sm font-bold text-yellow-700 uppercase tracking-wider border-b-2 border-yellow-300 pb-2 mb-4">Professional Details</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Occupation</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.occupation || 'N/A'}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Education</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.education || 'N/A'}</p>
            </div>
            {data.annualIncome && (
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-gray-500 text-xs uppercase tracking-wide">Annual Income</p>
                <p className="text-base font-semibold text-gray-900 mt-1">{data.annualIncome}</p>
              </div>
            )}
            {data.company && (
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-gray-500 text-xs uppercase tracking-wide">Company</p>
                <p className="text-base font-semibold text-gray-900 mt-1">{data.company}</p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-sm font-bold text-yellow-700 uppercase tracking-wider border-b-2 border-yellow-300 pb-2 mb-4">Contact Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">City / Location</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.city || data.location || 'N/A'}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">Email</p>
              <p className="text-base font-semibold text-gray-900 mt-1 break-all text-xs">{data.email || 'N/A'}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 col-span-2">
              <p className="text-gray-500 text-xs uppercase tracking-wide">About</p>
              <p className="text-sm text-gray-800 mt-1">{data.about || 'Seeking a life partner for matrimonial alliance.'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="border-t-8 border-yellow-600 mt-8 pt-6 text-center">
        <p className="text-yellow-700 text-xs font-italic">This biodata is prepared for matrimonial purposes only</p>
        <p className="text-gray-500 text-xs mt-2">© 2026 Marriage Biodata Generator • Confidential</p>
      </div>
    </div>
  )

  // Render selected template
  const renderTemplate = () => {
    switch (template) {
      case 'template1':
        return <ClassicTemplate />
      case 'template2':
        return <ModernTemplate />
      case 'template3':
        return <TraditionalTemplate />
      case 'template4':
        return <PremiumGoldTemplate />
      default:
        return <ClassicTemplate />
    }
  }

  return renderTemplate()
})

BioDataPDFPreview.displayName = 'BioDataPDFPreview'

export default BioDataPDFPreview
