import React, { forwardRef } from 'react';

const CremeClassicTemplate = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full bg-yellow-50 p-10 text-gray-900"
      style={{ fontSize: '11px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}
    >
      {/* Header */}
      <div className="text-center mb-4 pb-4 border-b-2 border-blue-900">
        <h1 className="text-2xl font-bold text-blue-900 mb-1">BIO-DATA</h1>
      </div>

      {/* Main Content with Photo */}
      <div className="flex gap-6">
        {/* Left Content */}
        <div className="flex-1">
          {/* Personal Information */}
          <div className="mb-6">
            <div className="space-y-2">
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Name</span>
                <span className="text-gray-800">: {data.name || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Date of Birth</span>
                <span className="text-gray-800">: {data.dateOfBirth || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Place of Birth</span>
                <span className="text-gray-800">: {data.city || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Blood Group</span>
                <span className="text-gray-800">: {data.bloodGroup || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Caste</span>
                <span className="text-gray-800">: {data.caste || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Complexion</span>
                <span className="text-gray-800">: {data.complexion || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Height</span>
                <span className="text-gray-800">: {data.height || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Education</span>
                <span className="text-gray-800">: {data.education || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Occupation */}
          <div className="mb-6 pb-4 border-b border-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-blue-700 font-semibold w-32">Occupation</span>
              <div className="flex-1">
                <p className="text-gray-800">: {data.occupation || 'N/A'}</p>
                <p className="text-gray-700 text-xs mt-1">{data.company || ''}</p>
              </div>
            </div>
          </div>

          {/* Package */}
          <div className="mb-6 pb-4 border-b border-gray-300">
            <div className="flex">
              <span className="text-blue-700 font-semibold w-32">Package</span>
              <span className="text-gray-800">: {data.annualIncome || 'N/A'}</span>
            </div>
          </div>

          {/* Family Background */}
          <div className="mb-6 pt-4">
            <h3 className="text-sm font-bold text-blue-900 mb-3 border-b-2 border-blue-700 pb-2">FAMILY BACKGROUND</h3>
            
            <div className="space-y-2">
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Father</span>
                <span className="text-gray-800">: {data.fatherName || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Father's Occupation</span>
                <span className="text-gray-800">: {data.fatherOccupation || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Mother</span>
                <span className="text-gray-800">: {data.motherName || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Mother's Occupation</span>
                <span className="text-gray-800">: {data.motherOccupation || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-blue-700 font-semibold w-32">Siblings</span>
                <span className="text-gray-800">: {data.siblings || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6 pt-4 border-t-2 border-blue-700">
            <div className="flex items-start gap-2">
              <span className="text-blue-700 font-semibold w-32">Contact Detail and Address</span>
              <div className="flex-1">
                <p className="text-gray-800">: {data.location || 'N/A'}</p>
                {data.phone && <p className="text-gray-700 text-xs mt-1">Phone: {data.phone}</p>}
                {data.email && <p className="text-gray-700 text-xs">Email: {data.email}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Right Photo */}
        {data.photoPreview && (
          <div className="flex-shrink-0">
            <img 
              src={data.photoPreview} 
              alt="Profile" 
              className="w-32 h-40 object-cover border-2 border-blue-900"
            />
          </div>
        )}
      </div>
    </div>
  );
});

CremeClassicTemplate.displayName = 'CremeClassicTemplate';
export default CremeClassicTemplate;
