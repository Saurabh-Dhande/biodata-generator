import React, { forwardRef } from 'react';

const ModernTemplate = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 p-10 text-gray-900"
      style={{ fontSize: '11px', lineHeight: '1.5', fontFamily: 'Segoe UI, Arial, sans-serif' }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg mb-8 -m-10 mb-8">
        <h1 className="text-3xl font-bold mb-1">BIODATA</h1>
        <p className="text-gray-300 text-sm">Matrimonial Profile</p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {/* Personal Details */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border-l-4 border-gray-800">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Personal</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs uppercase">Name</p>
                <p className="font-semibold text-gray-900">{data.name || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Age</p>
                <p className="font-semibold text-gray-900">{data.age || 'N/A'} years</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Gender</p>
                <p className="font-semibold text-gray-900">{data.gender || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Height</p>
                <p className="font-semibold text-gray-900">{data.height || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Religion</p>
                <p className="font-semibold text-gray-900">{data.religion || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border-l-4 border-gray-800">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs uppercase">Qualification</p>
                <p className="font-semibold text-gray-900">{data.qualification || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Education</p>
                <p className="font-semibold text-gray-900">{data.education || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Career */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border-l-4 border-gray-800">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Career</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs uppercase">Occupation</p>
                <p className="font-semibold text-gray-900">{data.occupation || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Company</p>
                <p className="font-semibold text-gray-900">{data.company || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Income</p>
                <p className="font-semibold text-gray-900">{data.annualIncome || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border-l-4 border-gray-800">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs uppercase">City</p>
                <p className="font-semibold text-gray-900">{data.city || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Email</p>
                <p className="font-semibold text-gray-900 text-xs break-all">{data.email || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Family Information - Full Width */}
      <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gray-800 mb-6">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Family</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-xs uppercase">Father</p>
            <p className="font-semibold text-gray-900">{data.fatherName || 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase">Mother</p>
            <p className="font-semibold text-gray-900">{data.motherName || 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase">Caste</p>
            <p className="font-semibold text-gray-900">{data.caste || 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase">Gotra</p>
            <p className="font-semibold text-gray-900">{data.gotra || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* About */}
      {data.about && (
        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gray-800 mb-6">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">About</h3>
          <p className="text-gray-700 text-xs leading-relaxed">{data.about}</p>
        </div>
      )}

      {/* Footer */}
      <div className="text-center text-gray-500 text-xs pt-6 border-t border-gray-300">
        <p>Confidential - For Matrimonial Purpose Only</p>
      </div>
    </div>
  );
});

ModernTemplate.displayName = 'ModernTemplate';

export default ModernTemplate;
