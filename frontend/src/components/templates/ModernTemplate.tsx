import { BiodataFormData } from '@/types/biodata';

interface TemplateProps {
  data: BiodataFormData;
}

const ModernTemplate = ({ data }: TemplateProps) => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="w-full max-w-[600px] mx-auto bg-white p-8 font-sans">
      {/* Header with Photo */}
      <div className="flex items-start gap-6 mb-8 pb-6 border-b-2 border-gray-100">
        <div className="w-28 h-36 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-md">
          {data.photo ? (
            <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Photo
            </div>
          )}
        </div>
        <div className="flex-1 pt-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.fullName || 'Your Name'}</h1>
          <p className="text-lg text-gray-500 mb-3">{data.occupation || 'Profession'}</p>
          <div className="flex flex-wrap gap-2">
            {data.city && (
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                📍 {data.city}
              </span>
            )}
            {data.religion && (
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                {data.religion}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-8 text-sm">
        {/* Left Column */}
        <div className="space-y-6">
          <Section title="Personal Info">
            <InfoItem label="Date of Birth" value={formatDate(data.dateOfBirth)} />
            <InfoItem label="Height" value={data.height} />
            <InfoItem label="Complexion" value={data.complexion} />
            <InfoItem label="Blood Group" value={data.bloodGroup} />
            <InfoItem label="Manglik" value={data.manglik} />
          </Section>
          
          <Section title="Education & Work">
            <InfoItem label="Qualification" value={data.education} />
            <InfoItem label="Occupation" value={data.occupation} />
            <InfoItem label="Company" value={data.company} />
            <InfoItem label="Income" value={data.income} />
          </Section>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          <Section title="Family Background">
            <InfoItem label="Father" value={data.fatherName} />
            <InfoItem label="Father's Work" value={data.fatherOccupation} />
            <InfoItem label="Mother" value={data.motherName} />
            <InfoItem label="Siblings" value={`${data.brothers} Brother(s), ${data.sisters} Sister(s)`} />
            <InfoItem label="Family" value={data.familyType} />
          </Section>
          
          <Section title="Contact">
            <InfoItem label="Location" value={`${data.city}, ${data.state}`} />
            <InfoItem label="Phone" value={data.phone} />
            <InfoItem label="Email" value={data.email} />
          </Section>
        </div>
      </div>
      
      {/* About Section */}
      {data.aboutMe && (
        <div className="mt-8 pt-6 border-t-2 border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-600 leading-relaxed">{data.aboutMe}</p>
        </div>
      )}
      
      {data.partnerExpectations && (
        <div className="mt-6">
          <h3 className="text-base font-semibold text-gray-900 mb-2">Partner Preferences</h3>
          <p className="text-gray-600 leading-relaxed">{data.partnerExpectations}</p>
        </div>
      )}
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-gray-800 text-right">{value || '—'}</span>
  </div>
);

export default ModernTemplate;
