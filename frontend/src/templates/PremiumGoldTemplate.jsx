import React, { forwardRef } from 'react';

const PremiumGoldTemplate = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full bg-white p-12"
      style={{
        fontSize: '11px',
        lineHeight: '1.8',
        fontFamily: 'Georgia, serif',
        background: 'linear-gradient(135deg, #fef9f3 0%, #fef3e6 100%)'
      }}
    >
      {/* Decorative Top Corner Elements */}
      <div className="flex justify-between mb-2">
        <div className="text-yellow-600 text-2xl">✿</div>
        <div className="text-yellow-600 text-2xl">✿</div>
      </div>

      {/* Top Gold Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mb-8"></div>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-yellow-800 mb-2" style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
          MATRIMONIAL BIODATA
        </h1>
        <div className="flex justify-center gap-8 my-3">
          <span className="text-yellow-600">✾</span>
          <span className="text-yellow-600 text-lg">✿</span>
          <span className="text-yellow-600">✾</span>
        </div>
        <p className="text-yellow-700 text-xs uppercase tracking-widest">Professional Marriage Proposal</p>
        <p className="text-yellow-600 text-xs mt-2">✦ {new Date().toLocaleDateString()} ✦</p>
      </div>

      {/* Gold divider line */}
      <div className="h-0.5 bg-yellow-600 mb-8"></div>

      {/* Main Content with Gold Accents */}
      <div className="space-y-8">
        {/* Personal Profile Section */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-600 text-lg mr-3">✦</span>
            <h2 className="text-sm font-bold text-yellow-800 uppercase tracking-widest">Personal Profile</h2>
            <span className="text-yellow-600 text-lg ml-3">✦</span>
          </div>

          <div className="grid grid-cols-3 gap-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
            {/* Name - Full Width */}
            <div className="col-span-3">
              <p className="text-yellow-700 text-xs uppercase tracking-wide font-semibold">Full Name</p>
              <p className="text-2xl font-bold text-yellow-900 mt-2" style={{ fontFamily: 'Georgia, serif' }}>
                {data.name}
              </p>
            </div>

            {/* Age */}
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Age</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.age} years</p>
            </div>

            {/* Gender */}
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Gender</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.gender}</p>
            </div>

            {/* Height */}
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Height</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.height || 'N/A'}</p>
            </div>

            {/* Religion */}
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Religion</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.religion}</p>
            </div>

            {/* Complexion */}
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Complexion</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.complexion || 'N/A'}</p>
            </div>

            {/* Marital Status */}
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Marital Status</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.maritalStatus || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Family Background */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-600 text-lg mr-3">✦</span>
            <h2 className="text-sm font-bold text-yellow-800 uppercase tracking-widest">Family Background</h2>
            <span className="text-yellow-600 text-lg ml-3">✦</span>
          </div>

          <div className="grid grid-cols-2 gap-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Father's Name</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.fatherName || 'N/A'}</p>
            </div>
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Mother's Name</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.motherName || 'N/A'}</p>
            </div>
            {data.caste && (
              <div className="border-l-3 border-yellow-400 pl-4">
                <p className="text-yellow-700 text-xs uppercase tracking-wide">Caste</p>
                <p className="text-base font-semibold text-gray-900 mt-1">{data.caste}</p>
              </div>
            )}
            {data.gotra && (
              <div className="border-l-3 border-yellow-400 pl-4">
                <p className="text-yellow-700 text-xs uppercase tracking-wide">Gotra</p>
                <p className="text-base font-semibold text-gray-900 mt-1">{data.gotra}</p>
              </div>
            )}
          </div>
        </div>

        {/* Professional Details */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-600 text-lg mr-3">✦</span>
            <h2 className="text-sm font-bold text-yellow-800 uppercase tracking-widest">Professional Details</h2>
            <span className="text-yellow-600 text-lg ml-3">✦</span>
          </div>

          <div className="grid grid-cols-2 gap-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Occupation</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.occupation || 'N/A'}</p>
            </div>
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Education</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.education || 'N/A'}</p>
            </div>
            {data.company && (
              <div className="border-l-3 border-yellow-400 pl-4">
                <p className="text-yellow-700 text-xs uppercase tracking-wide">Company</p>
                <p className="text-base font-semibold text-gray-900 mt-1">{data.company}</p>
              </div>
            )}
            {data.annualIncome && (
              <div className="border-l-3 border-yellow-400 pl-4">
                <p className="text-yellow-700 text-xs uppercase tracking-wide">Annual Income</p>
                <p className="text-base font-semibold text-gray-900 mt-1">{data.annualIncome}</p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-600 text-lg mr-3">✦</span>
            <h2 className="text-sm font-bold text-yellow-800 uppercase tracking-widest">Contact Information</h2>
            <span className="text-yellow-600 text-lg ml-3">✦</span>
          </div>

          <div className="grid grid-cols-2 gap-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">City / Location</p>
              <p className="text-base font-semibold text-gray-900 mt-1">{data.city || data.location || 'N/A'}</p>
            </div>
            <div className="border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">Email</p>
              <p className="text-base font-semibold text-gray-900 mt-1 break-all text-xs">{data.email || 'N/A'}</p>
            </div>
            <div className="col-span-2 border-l-3 border-yellow-400 pl-4">
              <p className="text-yellow-700 text-xs uppercase tracking-wide">About / Profile</p>
              <p className="text-sm text-gray-800 mt-1">{data.about || 'Seeking a suitable life partner for matrimonial alliance.'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gold Divider */}
      <div className="h-0.5 bg-yellow-600 my-8"></div>

      {/* Decorative Bottom Elements */}
      <div className="flex justify-between mb-4">
        <div className="text-yellow-600 text-2xl">✿</div>
        <div className="text-yellow-600 text-2xl">✿</div>
      </div>

      {/* Footer */}
      <div className="text-center pt-4">
        <p className="text-yellow-800 text-xs font-italic" style={{ fontFamily: 'Georgia, serif' }}>
          This biodata is confidential and prepared for matrimonial purposes only
        </p>
        <p className="text-yellow-700 text-xs mt-3">© 2026 Marriage Biodata Generator • Professional & Confidential</p>
      </div>
    </div>
  );
});

PremiumGoldTemplate.displayName = 'PremiumGoldTemplate';

export default PremiumGoldTemplate;
