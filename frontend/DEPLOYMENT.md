# 💍 Marriage Biodata Generator

A modern, professional biodata generation tool with PDF export functionality. Create beautiful matrimonial biodata documents in seconds!

## Features

✨ **Multiple Templates**
- Classic Design (Traditional Purple)
- Modern Design (Minimalist Gray)
- Traditional Design (Heritage Gold with Hindi text)

📊 **Professional Biodata Form**
- Personal Information section
- Family Background section
- Education & Career details
- Location & Contact information
- Custom additional fields (optional)
- Usage analytics (biodata count & page visits)

📥 **PDF Export**
- One-click PDF download
- No data storage (100% private)
- No backend required
- Client-side PDF generation

## Tech Stack

- **Frontend**: React 18.2 + Vite 4.5
- **Styling**: Tailwind CSS 2.2
- **PDF Generation**: html2pdf.js 0.10.1
- **State Management**: React Hooks
- **Local Storage**: Browser localStorage for counters

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel (Recommended - FREE)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial biodata generator"
git remote add origin https://github.com/YOUR_USERNAME/biodata-generator.git
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Select your repository
   - Configure:
     - Framework: React
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Done!** Your site is live at `biodata-generator.vercel.app`

### Other Options

- **Netlify**: Similar process, go to https://netlify.com
- **Azure Static Web Apps**: Requires Azure account (has free tier)
- **GitHub Pages**: Limited functionality with routing

## Usage

1. Fill in your biodata details
2. Add optional custom fields (click "+ Add Field")
3. Click "Generate PDF Biodata"
4. Select your preferred template design
5. Download PDF or create another biodata
6. Check footer counters for statistics

## Privacy & Security

✅ **No Database**: All data stays in your browser  
✅ **No Backend**: 100% client-side processing  
✅ **No Tracking**: No analytics or tracking code  
✅ **localStorage Only**: Counters stored locally  

## Features Breakdown

### Personal Information Section
- Name, Age, Gender, Date of Birth
- Height, Complexion, Blood Group, Marital Status
- Optional custom fields (Weight, Ethnicity, etc.)

### Family Background Section
- Religion, Caste, Gotra
- Father's & Mother's names and occupations
- Number of siblings
- Optional custom fields (Ancestral place, etc.)

### Education & Career
- Education, Qualification, Occupation
- Designation, Company, Annual Income

### Location & Contact
- City, State, Country
- Email, Phone number

### Additional Information
- Hobbies & Interests
- About Me description
- What You're Looking For
- Custom fields with labels and values

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **First Load**: < 2 seconds
- **PDF Generation**: < 3 seconds
- **Bundle Size**: ~200KB gzipped

## License

MIT - Free for personal and commercial use

## Support

For issues or suggestions, please create an issue on GitHub.

---

Made with ❤️ for matrimonial connections
