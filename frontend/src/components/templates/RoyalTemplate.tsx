import { BiodataFormData } from '@/types/biodata';

interface TemplateProps {
  data: BiodataFormData;
}

const RoyalTemplate = ({ data }: TemplateProps) => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="w-full max-w-[600px] mx-auto bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 p-8 font-serif relative overflow-hidden">
      {/* Floral Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5c-3 0-5 4-5 8 0-4-2-8-5-8 3 0 5 4 5 8 0-4 2-8 5-8zM20 27c-3 0-5 4-5 8 0-4-2-8-5-8 3 0 5 4 5 8 0-4 2-8 5-8z' fill='%23EC4899' fill-opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Decorative Border */}
      <div className="absolute inset-4 border-2 border-pink-300/50 rounded-2xl pointer-events-none" />
      
      <div className="relative z-10">
        {/* Top Floral */}
        <div className="text-center text-4xl mb-4">🌸</div>
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-pink-400 text-sm tracking-[0.3em] uppercase mb-2">Marriage Biodata</h1>
          <h2 className="text-3xl font-bold text-pink-800 mb-2">{data.fullName || 'Full Name'}</h2>
          <div className="flex justify-center gap-1">
            <span className="text-pink-300">✿</span>
            <div className="w-24 h-px bg-pink-300 self-center" />
            <span className="text-pink-300">✿</span>
          </div>
        </div>
        
        {/* Photo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full opacity-50" />
            <div className="relative w-28 h-36 rounded-2xl overflow-hidden bg-pink-100 border-4 border-white shadow-lg">
              {data.photo ? (
                <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-pink-300 text-sm">
                  Photo
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-5 text-sm">
          <FloralSection title="Personal Details" icon="🌷">
            <div className="grid grid-cols-2 gap-3">
              <FloralRow label="Date of Birth" value={formatDate(data.dateOfBirth)} />
              <FloralRow label="Birth Time" value={data.birthTime} />
              <FloralRow label="Birth Place" value={data.birthPlace} />
              <FloralRow label="Religion" value={data.religion} />
              <FloralRow label="Caste" value={data.caste} />
              <FloralRow label="Gotra" value={data.gotra} />
              <FloralRow label="Height" value={data.height} />
              <FloralRow label="Complexion" value={data.complexion} />
            </div>
          </FloralSection>
          
          <FloralSection title="Education & Career" icon="🌺">
            <div className="grid grid-cols-2 gap-3">
              <FloralRow label="Education" value={data.education} />
              <FloralRow label="Occupation" value={data.occupation} />
              <FloralRow label="Company" value={data.company} />
              <FloralRow label="Income" value={data.income} />
            </div>
          </FloralSection>
          
          <FloralSection title="Family" icon="🌻">
            <div className="grid grid-cols-2 gap-3">
              <FloralRow label="Father" value={data.fatherName} />
              <FloralRow label="Father's Work" value={data.fatherOccupation} />
              <FloralRow label="Mother" value={data.motherName} />
              <FloralRow label="Mother's Work" value={data.motherOccupation} />
              <FloralRow label="Siblings" value={`${data.brothers}B / ${data.sisters}S`} />
              <FloralRow label="Family Type" value={data.familyType} />
            </div>
          </FloralSection>
          
          <FloralSection title="Contact" icon="🌹">
            <div className="grid grid-cols-2 gap-3">
              <FloralRow label="Location" value={`${data.city}, ${data.state}`} />
              <FloralRow label="Phone" value={data.phone} />
              <FloralRow label="Email" value={data.email} />
            </div>
          </FloralSection>
          
          {data.aboutMe && (
            <div className="bg-white/50 rounded-xl p-4 border border-pink-200">
              <p className="text-pink-800/80 leading-relaxed text-center italic">
                "{data.aboutMe}"
              </p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center mt-6">
          <div className="flex justify-center gap-2 text-2xl">
            <span>🌸</span>
            <span>💕</span>
            <span>🌸</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloralSection = ({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) => (
  <div className="bg-white/40 rounded-xl p-4 backdrop-blur-sm">
    <h3 className="text-sm font-bold text-pink-600 mb-3 flex items-center gap-2">
      <span>{icon}</span>
      {title}
    </h3>
    {children}
  </div>
);

const FloralRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-pink-400 text-xs">{label}</span>
    <div className="font-medium text-pink-900">{value || '—'}</div>
  </div>
);

export default RoyalTemplate;
