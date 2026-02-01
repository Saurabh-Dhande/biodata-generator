import { BiodataFormData } from '@/types/biodata';

interface TemplateProps {
  data: BiodataFormData;
}

const TraditionalTemplate = ({ data }: TemplateProps) => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="w-full max-w-[600px] mx-auto bg-gradient-to-br from-amber-50 to-orange-50 p-8 font-serif relative overflow-hidden">
      {/* Decorative Border */}
      <div className="absolute inset-4 border-2 border-primary/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-6 border border-gold/40 rounded-lg pointer-events-none" />
      
      {/* Corner Decorations */}
      <div className="absolute top-2 left-2 text-4xl text-gold/60">❧</div>
      <div className="absolute top-2 right-2 text-4xl text-gold/60 rotate-90">❧</div>
      <div className="absolute bottom-2 left-2 text-4xl text-gold/60 -rotate-90">❧</div>
      <div className="absolute bottom-2 right-2 text-4xl text-gold/60 rotate-180">❧</div>
      
      <div className="relative z-10 p-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-primary/60 text-lg mb-1">॥ श्री गणेशाय नमः ॥</div>
          <h1 className="text-3xl font-bold text-primary mb-2 tracking-wide">BIODATA</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>
        
        {/* Photo */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-40 rounded-lg border-4 border-gold/40 shadow-lg overflow-hidden bg-muted">
            {data.photo ? (
              <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                Photo
              </div>
            )}
          </div>
        </div>
        
        {/* Name */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-primary">{data.fullName || 'Full Name'}</h2>
        </div>
        
        {/* Details Sections */}
        <div className="space-y-4 text-sm">
          {/* Personal Details */}
          <div>
            <h3 className="text-base font-bold text-primary border-b border-gold/40 pb-1 mb-3 flex items-center gap-2">
              <span className="text-gold">✦</span> Personal Details
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <DetailRow label="Date of Birth" value={formatDate(data.dateOfBirth)} />
              <DetailRow label="Birth Time" value={data.birthTime} />
              <DetailRow label="Birth Place" value={data.birthPlace} />
              <DetailRow label="Religion" value={data.religion} />
              <DetailRow label="Caste" value={data.caste} />
              <DetailRow label="Gotra" value={data.gotra} />
              <DetailRow label="Manglik" value={data.manglik} />
              <DetailRow label="Height" value={data.height} />
              <DetailRow label="Complexion" value={data.complexion} />
              <DetailRow label="Blood Group" value={data.bloodGroup} />
            </div>
          </div>
          
          {/* Education & Career */}
          <div>
            <h3 className="text-base font-bold text-primary border-b border-gold/40 pb-1 mb-3 flex items-center gap-2">
              <span className="text-gold">✦</span> Education & Career
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <DetailRow label="Education" value={data.education} />
              <DetailRow label="Occupation" value={data.occupation} />
              <DetailRow label="Company" value={data.company} />
              <DetailRow label="Income" value={data.income} />
            </div>
          </div>
          
          {/* Family Details */}
          <div>
            <h3 className="text-base font-bold text-primary border-b border-gold/40 pb-1 mb-3 flex items-center gap-2">
              <span className="text-gold">✦</span> Family Details
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <DetailRow label="Father's Name" value={data.fatherName} />
              <DetailRow label="Father's Occupation" value={data.fatherOccupation} />
              <DetailRow label="Mother's Name" value={data.motherName} />
              <DetailRow label="Mother's Occupation" value={data.motherOccupation} />
              <DetailRow label="Brothers" value={data.brothers} />
              <DetailRow label="Sisters" value={data.sisters} />
              <DetailRow label="Family Type" value={data.familyType} />
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-primary border-b border-gold/40 pb-1 mb-3 flex items-center gap-2">
              <span className="text-gold">✦</span> Contact Details
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <DetailRow label="Address" value={`${data.city}, ${data.state}`} className="col-span-2" />
              <DetailRow label="Phone" value={data.phone} />
              <DetailRow label="Email" value={data.email} />
            </div>
          </div>
          
          {/* About */}
          {data.aboutMe && (
            <div>
              <h3 className="text-base font-bold text-primary border-b border-gold/40 pb-1 mb-3 flex items-center gap-2">
                <span className="text-gold">✦</span> About Me
              </h3>
              <p className="text-foreground/80 leading-relaxed">{data.aboutMe}</p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center mt-8 pt-4 border-t border-gold/30">
          <div className="text-gold/60 text-lg">❦</div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value, className = '' }: { label: string; value: string; className?: string }) => (
  <div className={className}>
    <span className="text-muted-foreground">{label}:</span>{' '}
    <span className="font-medium text-foreground">{value || '—'}</span>
  </div>
);

export default TraditionalTemplate;
