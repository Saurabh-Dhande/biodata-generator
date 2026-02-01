import { useState, useRef, useEffect } from 'react'
import html2pdf from 'html2pdf.js'
import BioDataForm from './components/BioDataForm'
import BioDataPDFPreview from './components/BioDataPDFPreview'
import './App.css'

function App() {
  const [formData, setFormData] = useState(null)
  const [selectedTemplate, setSelectedTemplate] = useState('template1')
  const [showPreview, setShowPreview] = useState(false)
  const [biodataCount, setBiodataCount] = useState(0)
  const [pageVisits, setPageVisits] = useState(0)
  const pdfRef = useRef()

  // Track page visits and biodata count on mount
  useEffect(() => {
    // Increment page visits
    const visits = localStorage.getItem('pageVisits')
    const newVisits = (parseInt(visits) || 0) + 1
    localStorage.setItem('pageVisits', newVisits)
    setPageVisits(newVisits)

    // Load biodata count
    const biodatas = localStorage.getItem('biodataCount')
    setBiodataCount(parseInt(biodatas) || 0)
  }, [])

  const handleFormSubmit = (data) => {
    setFormData(data)
    setShowPreview(true)
    
    // Increment biodata counter
    const newCount = biodataCount + 1
    setBiodataCount(newCount)
    localStorage.setItem('biodataCount', newCount)
  }

  const handleDownloadPDF = () => {
    if (!pdfRef.current) return

    const element = pdfRef.current
    const options = {
      margin: 10,
      filename: `${formData.name || 'biodata'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    }

    html2pdf().set(options).from(element).save()
  }

  const handleCreateNew = () => {
    setFormData(null)
    setShowPreview(false)
  }

  if (showPreview && formData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">💍 Biodata Preview</h1>
            <p className="text-gray-600">Your biodata is ready. Download as PDF or create new</p>
          </div>

          {/* Template Selection */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <label className="block text-gray-700 font-bold mb-3">Select PDF Template:</label>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setSelectedTemplate('template1')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  selectedTemplate === 'template1'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Classic Design
              </button>
              <button
                onClick={() => setSelectedTemplate('template2')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  selectedTemplate === 'template2'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Modern Design
              </button>
              <button
                onClick={() => setSelectedTemplate('template3')}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  selectedTemplate === 'template3'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Traditional Design
              </button>
            </div>
          </div>

          {/* PDF Preview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6 overflow-auto max-h-[600px]">
            <BioDataPDFPreview 
              data={formData} 
              template={selectedTemplate}
              ref={pdfRef}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={handleDownloadPDF}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              📥 Download PDF
            </button>
            <button
              onClick={handleCreateNew}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              📝 Create New Biodata
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">💍 Marriage Biodata Generator</h1>
            <p className="text-gray-600 text-lg mb-4">
              Create and download your professional biodata in PDF format
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-600">
              <p className="text-gray-800 leading-relaxed mb-4">
                A biodata is a concise presentation of your personal, family, educational, and professional information. 
                Our generator helps you create a beautifully formatted, professional matrimonial biodata that you can 
                share with families, matrimonial websites, or community members.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📄</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Professional Templates</h4>
                    <p className="text-sm text-gray-600">Choose from 3 beautiful designs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Instant Download</h4>
                    <p className="text-sm text-gray-600">Get PDF ready in seconds</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Private & Secure</h4>
                    <p className="text-sm text-gray-600">Your data is never stored</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Share Easily</h4>
                    <p className="text-sm text-gray-600">Send PDF to anyone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Fill Your Details</h2>
          <BioDataForm onSubmit={handleFormSubmit} />
        </div>

        {/* Info Section */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">How it works:</h3>
          <ol className="space-y-2 text-gray-700">
            <li>1️⃣ Fill in all your details in the form</li>
            <li>2️⃣ Click submit to see a preview</li>
            <li>3️⃣ Choose your preferred template design</li>
            <li>4️⃣ Download the PDF and share with family</li>
          </ol>
        </div>

        {/* Footer with Counters */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center flex-1">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 inline-block">
                <p className="text-sm font-semibold text-gray-100 mb-2">📊 Biodata Created</p>
                <p className="text-4xl font-bold text-white">{biodataCount}</p>
              </div>
              <p className="text-gray-400 text-sm mt-3">Professional biodatas generated</p>
            </div>

            <div className="hidden md:block w-px h-20 bg-gray-700"></div>

            <div className="text-center flex-1">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-6 inline-block">
                <p className="text-sm font-semibold text-gray-100 mb-2">👥 Page Visits</p>
                <p className="text-4xl font-bold text-white">{pageVisits}</p>
              </div>
              <p className="text-gray-400 text-sm mt-3">Total page visits</p>
            </div>

            <div className="hidden md:block w-px h-20 bg-gray-700"></div>

            <div className="text-center flex-1 text-xs text-gray-400">
              <p className="mb-2">✨ Thank you for using</p>
              <p className="text-lg font-bold text-white mb-2">Marriage Biodata Generator</p>
              <p>Making matrimonial connections easier</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-500 text-sm">
            <p>© 2026 Marriage Biodata Generator • No data is stored • Completely Private & Secure</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

