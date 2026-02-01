import React, { forwardRef } from 'react';

const TraditionalTemplate = forwardRef(({ data }, ref) => {
  const hindiMonths = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवम्बर', 'दिसम्बर'];
  
  return (
    <div
      ref={ref}
      className="w-full bg-white p-10 text-gray-900"
      style={{
        fontSize: '11px',
        lineHeight: '1.6',
        fontFamily: 'Georgia, serif',
        backgroundImage: 'linear-gradient(135deg, rgba(217,119,6,0.03) 0%, rgba(217,119,6,0.01) 100%)'
      }}
    >
      {/* Decorative Top Border */}
      <div className="border-t-8 border-yellow-600 mb-4"></div>

      {/* Header - Bilingual */}
      <div className="text-center mb-8 pb-6 border-b-4 border-yellow-500">
        <h1 className="text-3xl font-bold text-yellow-800 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          MATRIMONIAL BIODATA
        </h1>
        <h2 className="text-2xl font-bold text-yellow-700 mb-3" style={{ fontFamily: 'Noto Sans Devanagari' }}>
          विवाह जीवन वृत्तांत
        </h2>
        <p className="text-yellow-700 text-sm">A Sacred Document for Marriage Alliance</p>
        <p className="text-yellow-600 text-xs mt-2" style={{ fontFamily: 'Noto Sans Devanagari' }}>
          विवाह संबंध के लिए एक पवित्र दस्तावेज़
        </p>
      </div>

      {/* Personal Information */}
      <div className="mb-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 py-2 mb-4">
          <h3 className="text-sm font-bold text-yellow-800">PERSONAL INFORMATION | व्यक्तिगत जानकारी</h3>
        </div>
        <div className="grid grid-cols-2 gap-6 bg-yellow-50 p-4 rounded">
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Name | नाम</p>
            <p className="text-gray-900 mt-1">{data.name || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Age | आयु</p>
            <p className="text-gray-900 mt-1">{data.age || 'N/A'} years</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Gender | लिंग</p>
            <p className="text-gray-900 mt-1">{data.gender || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Height | ऊंचाई</p>
            <p className="text-gray-900 mt-1">{data.height || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Complexion | रंग</p>
            <p className="text-gray-900 mt-1">{data.complexion || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Religion | धर्म</p>
            <p className="text-gray-900 mt-1">{data.religion || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Family Background */}
      <div className="mb-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 py-2 mb-4">
          <h3 className="text-sm font-bold text-yellow-800">FAMILY BACKGROUND | पारिवारिक पृष्ठभूमि</h3>
        </div>
        <div className="grid grid-cols-2 gap-6 bg-yellow-50 p-4 rounded">
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Father | पिता</p>
            <p className="text-gray-900 mt-1">{data.fatherName || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Mother | माता</p>
            <p className="text-gray-900 mt-1">{data.motherName || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Caste | जाति</p>
            <p className="text-gray-900 mt-1">{data.caste || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Gotra | गोत्र</p>
            <p className="text-gray-900 mt-1">{data.gotra || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Education & Career */}
      <div className="mb-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 py-2 mb-4">
          <h3 className="text-sm font-bold text-yellow-800">EDUCATION & CAREER | शिक्षा और व्यवसाय</h3>
        </div>
        <div className="grid grid-cols-2 gap-6 bg-yellow-50 p-4 rounded">
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Education | शिक्षा</p>
            <p className="text-gray-900 mt-1">{data.education || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Occupation | व्यवसाय</p>
            <p className="text-gray-900 mt-1">{data.occupation || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Company | कंपनी</p>
            <p className="text-gray-900 mt-1">{data.company || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Income | आय</p>
            <p className="text-gray-900 mt-1">{data.annualIncome || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="mb-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 py-2 mb-4">
          <h3 className="text-sm font-bold text-yellow-800">CONTACT | संपर्क</h3>
        </div>
        <div className="grid grid-cols-2 gap-6 bg-yellow-50 p-4 rounded">
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">City | शहर</p>
            <p className="text-gray-900 mt-1">{data.city || 'N/A'}</p>
          </div>
          <div className="border-l-3 border-yellow-400 pl-3">
            <p className="text-yellow-700 font-semibold text-xs">Email | ईमेल</p>
            <p className="text-gray-900 mt-1 text-xs break-all">{data.email || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* About */}
      {data.about && (
        <div className="mb-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 py-2 mb-4">
            <h3 className="text-sm font-bold text-yellow-800">ABOUT | परिचय</h3>
          </div>
          <div className="bg-yellow-50 p-4 rounded text-gray-800 text-sm">
            <p>{data.about}</p>
          </div>
        </div>
      )}

      {/* Decorative Bottom Border */}
      <div className="border-b-8 border-yellow-600 mt-8 pt-6">
        <p className="text-center text-yellow-700 text-xs font-italic">
          This biodata is confidential and prepared for matrimonial purposes only.<br/>
          <span style={{ fontFamily: 'Noto Sans Devanagari' }}>यह जीवन वृत्त गोपनीय है और विवाह के उद्देश्य के लिए तैयार किया गया है।</span>
        </p>
        <p className="text-center text-yellow-600 text-xs mt-3">© 2026 Marriage Biodata Generator</p>
      </div>
    </div>
  );
});

TraditionalTemplate.displayName = 'TraditionalTemplate';

export default TraditionalTemplate;
