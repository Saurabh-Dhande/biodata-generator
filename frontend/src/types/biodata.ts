export interface BiodataFormData {
  // Personal Details
  fullName: string;
  dateOfBirth: string;
  birthTime: string;
  birthPlace: string;
  religion: string;
  caste: string;
  subCaste: string;
  gotra: string;
  manglik: string;
  height: string;
  weight: string;
  complexion: string;
  bloodGroup: string;
  
  // Education & Career
  education: string;
  occupation: string;
  company: string;
  income: string;
  
  // Family Details
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothers: string;
  sisters: string;
  familyType: string;
  familyValues: string;
  
  // Contact Details
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  
  // About & Expectations
  aboutMe: string;
  partnerExpectations: string;
  
  // Photo
  photo: string | null;
}

export interface TemplateType {
  id: string;
  name: string;
  description: string;
  preview: string;
  theme: 'traditional' | 'modern' | 'elegant' | 'royal';
}
