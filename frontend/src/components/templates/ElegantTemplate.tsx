import { BiodataFormData } from '@/types/biodata';

interface TemplateProps {
  data: BiodataFormData;
}

const ElegantTemplate = ({ data }: TemplateProps) => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="w-full max-w-[600px] mx-auto bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-50 p-8 font-serif relative">
      {/* Gold Border Frame */}
      <div className="absolute inset-0 m-4">
        <div className="absolute inset-0 border-4 border-amber-400/50 rounded-sm" />
        <div className="absolute inset-2 border border-amber-300/30" />
      </div>
      
      {/* Top Ornament */}
      <div className="text-center mb-6 relative z-10">
        <div className="text-amber-500 text-3xl mb-2">👑</div>
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
      </div>
      
      <div className="relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl text-amber-600 mb-1 tracking-widest uppercase">Marriage Biodata</h1>
          <h2 className="text-3xl font-bold text-amber-900 tracking-wide">{data.fullName || 'Full Name'}</h2>
        </div>
        
        {/* Photo with Gold Frame */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg" />
            <div className="relative w-32 h-40 rounded-lg overflow-hidden bg-amber-100">
              {data.photo ? (
                <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-amber-400 text-sm">
                  Photo
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300" />
          <span className="text-amber-500">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300" />
        </div>
        
        {/* Details */}
        <div className="space-y-6 text-sm">
          <GoldSection title="Personal Details">
            <div className="grid grid-cols-2 gap-4">
              <GoldRow label="Date of Birth" value={formatDate(data.dateOfBirth)} />
              <GoldRow label="Birth Time" value={data.birthTime} />
              <GoldRow label="Birth Place" value={data.birthPlace} />
              <GoldRow label="Religion" value={data.religion} />
              <GoldRow label="Caste" value={data.caste} />
              <GoldRow label="Gotra" value={data.gotra} />
              <GoldRow label="Height" value={data.height} />
              <GoldRow label="Manglik" value={data.manglik} />
            </div>
          </GoldSection>
          
          <GoldSection title="Education & Profession">
            <div className="grid grid-cols-2 gap-4">
              <GoldRow label="Education" value={data.education} />
              <GoldRow label="Occupation" value={data.occupation} />
              <GoldRow label="Company" value={data.company} />
              <GoldRow label="Income" value={data.income} />
            </div>
          </GoldSection>
          
          <GoldSection title="Family Details">
            <div className="grid grid-cols-2 gap-4">
              <GoldRow label="Father's Name" value={data.fatherName} />
              <GoldRow label="Father's Occupation" value={data.fatherOccupation} />
              <GoldRow label="Mother's Name" value={data.motherName} />
              <GoldRow label="Mother's Occupation" value={data.motherOccupation} />
              <GoldRow label="Brothers" value={data.brothers} />
              <GoldRow label="Sisters" value={data.sisters} />
            </div>
          </GoldSection>
          
          <GoldSection title="Contact Information">
            <div className="grid grid-cols-2 gap-4">
              <GoldRow label="Address" value={`${data.city}, ${data.state}`} />
              <GoldRow label="Country" value={data.country} />
              <GoldRow label="Phone" value={data.phone} />
              <GoldRow label="Email" value={data.email} />
            </div>
          </GoldSection>
          
          {data.aboutMe && (
            <GoldSection title="About Me">
              <p className="text-amber-900/80 leading-relaxed italic">"{data.aboutMe}"</p>
            </GoldSection>
          )}
        </div>
        
        {/* Bottom Ornament */}
        <div className="text-center mt-8">
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-2" />
          <div className="text-amber-500 text-2xl">❦</div>
        </div>
      </div>
    </div>
  );
};

const GoldSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-base font-bold text-amber-700 mb-3 flex items-center gap-2">
      <span className="w-6 h-px bg-amber-400" />
      {title}
      <span className="flex-1 h-px bg-amber-200" />
    </h3>
    {children}
  </div>
);

const GoldRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-amber-600 text-xs uppercase tracking-wide">{label}</span>
    <div className="font-medium text-amber-900">{value || '—'}</div>
  </div>
);

export default ElegantTemplate;
