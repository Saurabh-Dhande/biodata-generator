import React, { forwardRef } from 'react';

const OrnateGoldenTemplate = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full bg-white p-0 text-gray-900 relative"
      style={{
        fontSize: '9.5px',
        lineHeight: '1.8',
        fontFamily: 'Georgia, serif',
        border: '3px solid #8B6914',
        position: 'relative'
      }}
    >
      {/* Corner decorations */}
      <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '16px', color: '#A0826D' }}>❈</div>
      <div style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '16px', color: '#A0826D' }}>❈</div>
      <div style={{ position: 'absolute', bottom: '8px', left: '8px', fontSize: '16px', color: '#A0826D' }}>❈</div>
      <div style={{ position: 'absolute', bottom: '8px', right: '8px', fontSize: '16px', color: '#A0826D' }}>❈</div>

      <div className="p-6">
        {/* Ornate Border - Top */}
        <div className="text-center mb-3" style={{ borderTop: '2px solid #A0826D', borderBottom: '2px solid #A0826D', paddingTop: '8px', paddingBottom: '8px' }}>
          <div style={{ fontSize: '18px', color: '#A0826D', fontWeight: '700', marginBottom: '4px' }}>❋ भ श्री गोवर्धन नाम ❋</div>
          <p style={{ fontSize: '9px', fontWeight: '600', color: '#A0826D', letterSpacing: '2px' }}>MATRIMONIAL BIODATA</p>
        </div>

        {/* Photo Section */}
        <div className="flex justify-center mb-4">
          {data.photoPreview && (
            <div style={{ border: '3px solid #A0826D', padding: '2px', backgroundColor: '#FFFAF0' }}>
              <img 
                src={data.photoPreview} 
                alt="Profile" 
                className="w-24 h-32 object-cover"
              />
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="flex justify-center gap-3 mb-4" style={{ color: '#A0826D', fontSize: '11px' }}>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        {/* Personal Details */}
        <div className="mb-4">
          <h3 style={{ fontSize: '11px', fontWeight: '700', color: '#A0826D', letterSpacing: '1px', marginBottom: '6px', borderBottom: '1px solid #A0826D', paddingBottom: '3px' }}>
            PERSONAL DETAILS
          </h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ width: '40%', paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Name</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.name || 'N/A'}</div>
                </td>
                <td style={{ width: '60%', paddingBottom: '4px', paddingLeft: '12px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Date of Birth</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.dateOfBirth || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Place of Birth</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.city || 'N/A'}</div>
                </td>
                <td style={{ paddingBottom: '4px', paddingLeft: '12px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Time of Birth</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>As per Biodata</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Rashi</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.gotra || 'N/A'}</div>
                </td>
                <td style={{ paddingBottom: '4px', paddingLeft: '12px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Complexion</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.complexion || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Height</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.height || 'N/A'}</div>
                </td>
                <td style={{ paddingBottom: '4px', paddingLeft: '12px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Education</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.education || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Work/Job</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.occupation || 'N/A'}</div>
                </td>
                <td style={{ paddingBottom: '4px', paddingLeft: '12px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Package</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.annualIncome || 'N/A'}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Divider */}
        <div className="flex justify-center gap-3 my-3" style={{ color: '#A0826D', fontSize: '11px' }}>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        {/* Family Details */}
        <div className="mb-4">
          <h3 style={{ fontSize: '11px', fontWeight: '700', color: '#A0826D', letterSpacing: '1px', marginBottom: '6px', borderBottom: '1px solid #A0826D', paddingBottom: '3px' }}>
            FAMILY DETAILS
          </h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ width: '40%', paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Father's Name</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.fatherName || 'N/A'}</div>
                </td>
                <td style={{ width: '60%', paddingBottom: '4px', paddingLeft: '12px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Father's Occupation</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.fatherOccupation || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Mother's Name</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.motherName || 'N/A'}</div>
                </td>
                <td style={{ paddingBottom: '4px', paddingLeft: '12px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Mother's Occupation</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.motherOccupation || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Brother</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.siblings || 'N/A'}</div>
                </td>
                <td style={{ paddingBottom: '4px', paddingLeft: '12px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Sister</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.siblings || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Brother in Law</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>As per Biodata</div>
                </td>
                <td style={{ paddingBottom: '4px', paddingLeft: '12px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Religion</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.religion || 'N/A'}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Divider */}
        <div className="flex justify-center gap-3 my-3" style={{ color: '#A0826D', fontSize: '11px' }}>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        {/* Contact Details */}
        <div className="mb-4 pt-2">
          <h3 style={{ fontSize: '11px', fontWeight: '700', color: '#A0826D', letterSpacing: '1px', marginBottom: '6px', borderBottom: '1px solid #A0826D', paddingBottom: '3px' }}>
            CONTACT DETAILS
          </h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Contact Person</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.name || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Contact Number</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.phone || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Email ID</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.email || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '4px' }}>
                  <span style={{ color: '#A0826D', fontWeight: '600', fontSize: '8.5px' }}>Residential Address</span>
                  <div style={{ color: '#1F2937', fontSize: '9.5px', marginTop: '2px' }}>{data.location || 'N/A'}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Ornate Border */}
        <div className="text-center mt-6 pt-3" style={{ borderTop: '2px solid #A0826D', borderBottom: '2px solid #A0826D', paddingBottom: '8px' }}>
          <div style={{ fontSize: '11px', color: '#A0826D' }}>❋ भ श्री गोवर्धन नाम ❋</div>
        </div>
      </div>
    </div>
  );
});

OrnateGoldenTemplate.displayName = 'OrnateGoldenTemplate';
export default OrnateGoldenTemplate;
