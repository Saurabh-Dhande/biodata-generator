import { useState, useRef } from 'react';
import { BiodataFormData } from '@/types/biodata';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, User, GraduationCap, Users, MapPin, Heart } from 'lucide-react';

interface BiodataFormProps {
  formData: BiodataFormData;
  onUpdateForm: (data: Partial<BiodataFormData>) => void;
  onPreview: () => void;
}

const BiodataForm = ({ formData, onUpdateForm, onPreview }: BiodataFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState('personal');

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onUpdateForm({ photo: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: keyof BiodataFormData, value: string) => {
    onUpdateForm({ [field]: value });
  };

  return (
    <section id="form" className="py-20 bg-cream-dark/20">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            Fill Your Details
          </h2>
          <p className="text-muted-foreground">
            Complete the form below to generate your personalized biodata
          </p>
        </div>

        <Card className="shadow-card border-0 overflow-hidden">
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full rounded-none border-b bg-muted/30 h-auto p-0 grid grid-cols-5">
                {[
                  { value: 'personal', icon: User, label: 'Personal' },
                  { value: 'education', icon: GraduationCap, label: 'Education' },
                  { value: 'family', icon: Users, label: 'Family' },
                  { value: 'contact', icon: MapPin, label: 'Contact' },
                  { value: 'about', icon: Heart, label: 'About' },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-4 px-2 flex flex-col gap-1"
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="p-6">
                {/* Photo Upload */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-32 h-40 rounded-xl border-2 border-dashed border-primary/30 hover:border-primary/60 bg-muted/30 flex flex-col items-center justify-center gap-2 transition-colors overflow-hidden group"
                    >
                      {formData.photo ? (
                        <img
                          src={formData.photo}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <Camera className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            Add Photo
                          </span>
                        </>
                      )}
                    </button>
                    {formData.photo && (
                      <button
                        onClick={() => onUpdateForm({ photo: null })}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full text-xs hover:bg-destructive/90"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>

                <TabsContent value="personal" className="mt-0 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthTime">Birth Time</Label>
                      <Input
                        id="birthTime"
                        type="time"
                        value={formData.birthTime}
                        onChange={(e) => handleInputChange('birthTime', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthPlace">Birth Place</Label>
                      <Input
                        id="birthPlace"
                        value={formData.birthPlace}
                        onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                        placeholder="City, State"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="religion">Religion</Label>
                      <Input
                        id="religion"
                        value={formData.religion}
                        onChange={(e) => handleInputChange('religion', e.target.value)}
                        placeholder="e.g., Hindu, Muslim, Christian"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="caste">Caste</Label>
                      <Input
                        id="caste"
                        value={formData.caste}
                        onChange={(e) => handleInputChange('caste', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gotra">Gotra</Label>
                      <Input
                        id="gotra"
                        value={formData.gotra}
                        onChange={(e) => handleInputChange('gotra', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="manglik">Manglik</Label>
                      <Select
                        value={formData.manglik}
                        onValueChange={(value) => handleInputChange('manglik', value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="No">No</SelectItem>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="Partial">Partial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        value={formData.height}
                        onChange={(e) => handleInputChange('height', e.target.value)}
                        placeholder='e.g., 5&apos;8"'
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="complexion">Complexion</Label>
                      <Select
                        value={formData.complexion}
                        onValueChange={(value) => handleInputChange('complexion', value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Fair">Fair</SelectItem>
                          <SelectItem value="Wheatish">Wheatish</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Dark">Dark</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Select
                        value={formData.bloodGroup}
                        onValueChange={(value) => handleInputChange('bloodGroup', value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => (
                            <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="mt-0 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="education">Education *</Label>
                      <Input
                        id="education"
                        value={formData.education}
                        onChange={(e) => handleInputChange('education', e.target.value)}
                        placeholder="e.g., B.Tech in Computer Science"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="occupation">Occupation *</Label>
                      <Input
                        id="occupation"
                        value={formData.occupation}
                        onChange={(e) => handleInputChange('occupation', e.target.value)}
                        placeholder="e.g., Software Engineer"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Company name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="income">Annual Income</Label>
                      <Input
                        id="income"
                        value={formData.income}
                        onChange={(e) => handleInputChange('income', e.target.value)}
                        placeholder="e.g., 10-15 LPA"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="family" className="mt-0 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fatherName">Father's Name *</Label>
                      <Input
                        id="fatherName"
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange('fatherName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                      <Input
                        id="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={(e) => handleInputChange('fatherOccupation', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="motherName">Mother's Name *</Label>
                      <Input
                        id="motherName"
                        value={formData.motherName}
                        onChange={(e) => handleInputChange('motherName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                      <Input
                        id="motherOccupation"
                        value={formData.motherOccupation}
                        onChange={(e) => handleInputChange('motherOccupation', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="brothers">Number of Brothers</Label>
                      <Input
                        id="brothers"
                        type="number"
                        min="0"
                        value={formData.brothers}
                        onChange={(e) => handleInputChange('brothers', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sisters">Number of Sisters</Label>
                      <Input
                        id="sisters"
                        type="number"
                        min="0"
                        value={formData.sisters}
                        onChange={(e) => handleInputChange('sisters', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="familyType">Family Type</Label>
                      <Select
                        value={formData.familyType}
                        onValueChange={(value) => handleInputChange('familyType', value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nuclear">Nuclear</SelectItem>
                          <SelectItem value="Joint">Joint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="familyValues">Family Values</Label>
                      <Select
                        value={formData.familyValues}
                        onValueChange={(value) => handleInputChange('familyValues', value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Traditional">Traditional</SelectItem>
                          <SelectItem value="Moderate">Moderate</SelectItem>
                          <SelectItem value="Liberal">Liberal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="mt-0 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Full address"
                        className="mt-1"
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="email@example.com"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="about" className="mt-0 space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="aboutMe">About Me</Label>
                      <Textarea
                        id="aboutMe"
                        value={formData.aboutMe}
                        onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                        placeholder="Write a brief introduction about yourself, your hobbies, interests, and lifestyle..."
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="partnerExpectations">Partner Expectations</Label>
                      <Textarea
                        id="partnerExpectations"
                        value={formData.partnerExpectations}
                        onChange={(e) => handleInputChange('partnerExpectations', e.target.value)}
                        placeholder="Describe your ideal life partner, preferences, and expectations..."
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Preview Button */}
                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={onPreview}
                    size="lg"
                    className="bg-primary hover:bg-burgundy-dark text-primary-foreground px-12 py-6 text-lg font-semibold shadow-elegant transition-all hover:scale-105"
                  >
                    Preview Biodata
                  </Button>
                </div>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BiodataForm;
