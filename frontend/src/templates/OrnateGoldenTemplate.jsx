import React, { forwardRef } from 'react';

const OrnateGoldenTemplate = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full bg-white p-8 text-gray-900"
      style={{
        fontSize: '10px',
        lineHeight: '1.7',
        fontFamily: 'Georgia, serif',
        backgroundImage: 'linear-gradient(135deg, rgba(217,119,6,0.05) 0%, rgba(217,119,6,0.02) 100%)'
      }}
    >
      {/* Ornate Border - Top */}
      <div className="border-t-4 border-b-2 border-yellow-700 py-3 mb-4 text-center">
        <div className="text-yellow-700 text-lg mb-1">❋ भ श्री गोवर्धन नाम ❋</div>
        <p className="text-yellow-700 text-xs font-semibold">MATRIMONIAL BIODATA</p>
      </div>

      {/* Photo Section */}
      <div className="flex justify-center mb-4">
        {data.photoPreview && (
          <div className="border-4 border-yellow-700 p-1 bg-yellow-50">
            <img 
              src={data.photoPreview} 
              alt="Profile" 
              className="w-28 h-36 object-cover"
            />
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="flex justify-center gap-2 mb-4 text-yellow-700">
        <span>❋</span>
        <span>❋</span>
        <span>❋</span>
      </div>

      {/* Personal Details */}
      <div className="mb-4">
        <h3 className="text-sm font-bold text-yellow-800 uppercase tracking-wide mb-2 border-b-2 border-yellow-600 pb-1">
          PERSONAL DETAILS
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Name</span>
            <p className="text-gray-900 mt-0.5">{data.name || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Date of Birth</span>
            <p className="text-gray-900 mt-0.5">{data.dateOfBirth || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Place of Birth</span>
            <p className="text-gray-900 mt-0.5">{data.city || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Time of Birth</span>
            <p className="text-gray-900 mt-0.5">As per Biodata</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Rashi</span>
            <p className="text-gray-900 mt-0.5">{data.gotra || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Complexion</span>
            <p className="text-gray-900 mt-0.5">{data.complexion || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Height</span>
            <p className="text-gray-900 mt-0.5">{data.height || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Education</span>
            <p className="text-gray-900 mt-0.5">{data.education || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Work/Job</span>
            <p className="text-gray-900 mt-0.5">{data.occupation || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Package</span>
            <p className="text-gray-900 mt-0.5">{data.annualIncome || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center gap-2 my-3 text-yellow-700">
        <span>❋</span>
        <span>❋</span>
        <span>❋</span>
      </div>

      {/* Family Details */}
      <div className="mb-4">
        <h3 className="text-sm font-bold text-yellow-800 uppercase tracking-wide mb-2 border-b-2 border-yellow-600 pb-1">
          FAMILY DETAILS
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Father's Name</span>
            <p className="text-gray-900 mt-0.5">{data.fatherName || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Father's Occupation</span>
            <p className="text-gray-900 mt-0.5">{data.fatherOccupation || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Mother's Name</span>
            <p className="text-gray-900 mt-0.5">{data.motherName || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Mother's Occupation</span>
            <p className="text-gray-900 mt-0.5">{data.motherOccupation || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Brother</span>
            <p className="text-gray-900 mt-0.5">{data.siblings || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Sister</span>
            <p className="text-gray-900 mt-0.5">{data.siblings || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center gap-2 my-3 text-yellow-700">
        <span>❋</span>
        <span>❋</span>
        <span>❋</span>
      </div>

      {/* Contact Details */}
      <div className="mb-4 pt-2">
        <h3 className="text-sm font-bold text-yellow-800 uppercase tracking-wide mb-2 border-b-2 border-yellow-600 pb-1">
          CONTACT DETAILS
        </h3>
        
        <div className="space-y-1">
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Contact Person</span>
            <p className="text-gray-900 mt-0.5">{data.name || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Contact Number</span>
            <p className="text-gray-900 mt-0.5">{data.phone || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Email ID</span>
            <p className="text-gray-900 mt-0.5">{data.email || 'N/A'}</p>
          </div>
          <div>
            <span className="text-yellow-700 font-semibold text-xs">Residential Address</span>
            <p className="text-gray-900 mt-0.5">{data.location || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Bottom Ornate Border */}
      <div className="border-t-2 border-b-4 border-yellow-700 mt-6 pt-3 text-center">
        <div className="text-yellow-700 text-xs">❋ भ श्री गोवर्धन नाम ❋</div>
      </div>
    </div>
  );
});

OrnateGoldenTemplate.displayName = 'OrnateGoldenTemplate';
export default OrnateGoldenTemplate;
