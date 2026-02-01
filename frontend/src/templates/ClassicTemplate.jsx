import React, { forwardRef } from 'react';

const ClassicTemplate = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full bg-white p-12 text-gray-900"
      style={{ fontSize: '12px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}
    >
      {/* Header with Photo */}
      <div className="border-b-4 border-purple-600 pb-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-purple-600 mb-2">MATRIMONIAL BIODATA</h1>
            <p className="text-center text-gray-600 text-sm">Professional Marriage Proposal Document</p>
          </div>
          {data.photoPreview && (
            <div className="ml-6">
              <img 
                src={data.photoPreview} 
                alt="Profile" 
                className="w-24 h-32 object-cover rounded-lg border-2 border-purple-600"
              />
            </div>
          )}
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-purple-600 border-b-2 border-purple-300 pb-2 mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-purple-700">Name</p>
            <p className="text-gray-800 mt-1">{data.name || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Age</p>
            <p className="text-gray-800 mt-1">{data.age || 'N/A'} years</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Gender</p>
            <p className="text-gray-800 mt-1">{data.gender || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Height</p>
            <p className="text-gray-800 mt-1">{data.height || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Complexion</p>
            <p className="text-gray-800 mt-1">{data.complexion || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Blood Group</p>
            <p className="text-gray-800 mt-1">{data.bloodGroup || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Religion</p>
            <p className="text-gray-800 mt-1">{data.religion || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Marital Status</p>
            <p className="text-gray-800 mt-1">{data.maritalStatus || 'N/A'}</p>
          </div>
        </div>
        {data.additionalPersonal?.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-300">
            {data.additionalPersonal.map((field, idx) => (
              <div key={idx} className="mb-3">
                <p className="font-semibold text-purple-700">{field.label}</p>
                <p className="text-gray-800 mt-1">{field.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Family Background */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-purple-600 border-b-2 border-purple-300 pb-2 mb-4">Family Background</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-purple-700">Father's Name</p>
            <p className="text-gray-800 mt-1">{data.fatherName || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Father's Occupation</p>
            <p className="text-gray-800 mt-1">{data.fatherOccupation || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Mother's Name</p>
            <p className="text-gray-800 mt-1">{data.motherName || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Caste</p>
            <p className="text-gray-800 mt-1">{data.caste || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Gotra</p>
            <p className="text-gray-800 mt-1">{data.gotra || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Siblings</p>
            <p className="text-gray-800 mt-1">{data.siblings || 'N/A'}</p>
          </div>
        </div>
        {data.additionalFamily?.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-300">
            {data.additionalFamily.map((field, idx) => (
              <div key={idx} className="mb-3">
                <p className="font-semibold text-purple-700">{field.label}</p>
                <p className="text-gray-800 mt-1">{field.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Education & Career */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-purple-600 border-b-2 border-purple-300 pb-2 mb-4">Education & Career</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-purple-700">Education</p>
            <p className="text-gray-800 mt-1">{data.education || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Qualification</p>
            <p className="text-gray-800 mt-1">{data.qualification || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Occupation</p>
            <p className="text-gray-800 mt-1">{data.occupation || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Designation</p>
            <p className="text-gray-800 mt-1">{data.designation || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Company</p>
            <p className="text-gray-800 mt-1">{data.company || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Annual Income</p>
            <p className="text-gray-800 mt-1">{data.annualIncome || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-purple-600 border-b-2 border-purple-300 pb-2 mb-4">Contact Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-purple-700">City</p>
            <p className="text-gray-800 mt-1">{data.city || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">State</p>
            <p className="text-gray-800 mt-1">{data.state || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Country</p>
            <p className="text-gray-800 mt-1">{data.country || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Email</p>
            <p className="text-gray-800 mt-1 break-all text-xs">{data.email || 'N/A'}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold text-purple-700">Phone</p>
            <p className="text-gray-800 mt-1">{data.phone || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      {data.about && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-purple-600 border-b-2 border-purple-300 pb-2 mb-4">About</h2>
          <p className="text-gray-800">{data.about}</p>
        </div>
      )}

      {/* Footer */}
      <div className="border-t-2 border-purple-300 pt-6 mt-8 text-center text-gray-600 text-xs">
        <p>This biodata is confidential and prepared for matrimonial purposes only.</p>
        <p className="mt-2">© 2026 Marriage Biodata Generator</p>
      </div>
    </div>
  );
});

ClassicTemplate.displayName = 'ClassicTemplate';

export default ClassicTemplate;
