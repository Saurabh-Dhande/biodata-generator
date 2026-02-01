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
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const pdfRef = useRef()
  const [previewZoom, setPreviewZoom] = useState(1)

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

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true)
      setDownloadProgress(0)
      
      const fileName = `${formData.name || 'biodata'}_${selectedTemplate}.pdf`
      
      setDownloadProgress(20)
      
      // Call backend API to generate PDF
      const response = await fetch('http://localhost:7071/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          biodata: formData,
          template: selectedTemplate
        })
      })
      
      setDownloadProgress(60)
      
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to generate PDF')
      }
      
      // Get PDF blob from response
      const pdfBlob = await response.blob()
      
      setDownloadProgress(85)
      
      // Create download link
      const url = window.URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      
      setDownloadProgress(100)
      
      // Show success message
      setTimeout(() => {
        setDownloadProgress(0)
        setIsDownloading(false)
        alert('PDF downloaded successfully!')
      }, 500)
    } catch (error) {
      console.error('Error downloading PDF:', error)
      setIsDownloading(false)
      alert(`Error downloading PDF: ${error.message}. If backend is not running, make sure to start it with 'python app.py'`)
    }
  }

  const handleCreateNew = () => {
    setFormData(null)
    setShowPreview(false)
    setSelectedTemplate('template1')
  }

  if (showPreview && formData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 py-4 md:py-8 px-3 md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with Step Indicator */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">💍 Biodata Preview</h1>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Step 2: Choose Template & Download
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600">Select a template design and preview your biodata before downloading</p>
          </div>

          {/* Template Selection Cards */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Select Your Preferred Template:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                  { id: 'template1', name: 'Classic Design', icon: '📋', color: 'purple', desc: 'Professional, clean layout' },
                  { id: 'template2', name: 'Modern Design', icon: '🎨', color: 'blue', desc: 'Contemporary, bold typography' },
                  { id: 'template3', name: 'Traditional', icon: '🏛️', color: 'amber', desc: 'Classic, cultural layout' },
                  { id: 'template4', name: 'Premium Gold', icon: '👑', color: 'yellow', desc: 'Elegant gold accents' },
                  { id: 'template5', name: 'Creme Classic', icon: '✨', color: 'orange', desc: 'Cream background, refined' },
                  { id: 'template6', name: 'Ornate Golden', icon: '🏵️', color: 'red', desc: 'Ornate borders & motifs' }
                ].map(template => (
                  <div key={template.id} className={`template-card p-3 ${selectedTemplate===template.id? 'ring-2 ring-offset-2 ring-indigo-300':''}`} onClick={() => setSelectedTemplate(template.id)}>
                    <div className="template-thumb mb-3">
                      <div className="text-3xl">{template.icon}</div>
                    </div>
                    <div className="font-semibold text-sm mb-1">{template.name}</div>
                    <div className="text-xs muted">{template.desc}</div>
                  </div>
                ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* PDF Preview */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-4 md:px-6 py-3 md:py-4 border-b app-header flex items-center justify-between">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">📄 PDF Preview</h3>
                  <div className="preview-toolbar">
                    <button onClick={() => setPreviewZoom(0.8)} className="tool-btn secondary">80%</button>
                    <button onClick={() => setPreviewZoom(1)} className="tool-btn secondary">100%</button>
                    <button onClick={() => setPreviewZoom(1.2)} className="tool-btn">120%</button>
                    <button onClick={() => setPreviewZoom(1)} className="tool-btn">Fit</button>
                  </div>
                </div>
                <div className="overflow-auto max-h-[640px] bg-gray-50 p-6">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ transform: `scale(${previewZoom})`, transformOrigin: 'top center', transition: 'transform .18s ease' }}>
                      <BioDataPDFPreview 
                        data={formData} 
                        template={selectedTemplate}
                        ref={pdfRef}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-4">
              {/* Download Button */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-lg p-4 md:p-6 text-white">
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Ready to Download?</h3>
                  <p className="text-sm text-green-50">Your biodata is beautifully formatted</p>
                </div>
                <button
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                    isDownloading
                      ? 'bg-green-700 opacity-75 cursor-not-allowed'
                      : 'bg-white text-emerald-600 hover:bg-green-50 transform hover:scale-105 active:scale-95'
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <span>💾</span>
                      Download PDF
                    </>
                  )}
                </button>
                {downloadProgress > 0 && downloadProgress < 100 && (
                  <div className="mt-4">
                    <div className="bg-green-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-white h-full transition-all duration-300"
                        style={{ width: `${downloadProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-green-50 mt-2 text-center">{downloadProgress}%</p>
                  </div>
                )}
              </div>

              {/* Biodata Info */}
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                <h3 className="font-bold text-gray-800 mb-3">📋 Biodata Info</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Name:</span>
                    <span>{formData.name || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Age:</span>
                    <span>{formData.age || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Gender:</span>
                    <span>{formData.gender || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Template:</span>
                    <span className="text-purple-600 font-semibold">{selectedTemplate}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-blue-50 rounded-lg shadow-lg p-4 md:p-6 border border-blue-200">
                <h3 className="font-bold text-gray-800 mb-3">✨ Features</h3>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>High-quality PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Professional design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Easy to share</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Button */}
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <button
              onClick={handleCreateNew}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition text-sm md:text-base flex items-center gap-2"
            >
              <span>📝</span>
              Create Another Biodata
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
                    <p className="text-sm text-gray-600">Choose from 4 beautiful designs</p>
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
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Step 1: Fill Your Details</h2>
          <BioDataForm onSubmit={handleFormSubmit} />
        </div>

        {/* Info Section */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-4 md:p-6 mt-6 md:mt-8">
          <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">How it works:</h3>
          <ol className="space-y-2 text-sm md:text-base text-gray-700">
            <li>✅ <strong>Step 1:</strong> Fill in all your details in the form</li>
            <li>✅ <strong>Step 2:</strong> Choose your preferred template design</li>
            <li>✅ <strong>Step 3:</strong> Preview your biodata</li>
            <li>✅ <strong>Step 4:</strong> Download the PDF and share with family</li>
          </ol>
        </div>

        {/* Footer with Counters */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-4 md:p-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <div className="text-center flex-1">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-4 md:p-6 inline-block">
                <p className="text-xs md:text-sm font-semibold text-gray-100 mb-2">📊 Biodata Created</p>
                <p className="text-3xl md:text-4xl font-bold text-white">{biodataCount}</p>
              </div>
              <p className="text-gray-400 text-xs md:text-sm mt-2 md:mt-3">Professional biodatas generated</p>
            </div>

            <div className="hidden md:block w-px h-20 bg-gray-700"></div>

            <div className="text-center flex-1">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-4 md:p-6 inline-block">
                <p className="text-xs md:text-sm font-semibold text-gray-100 mb-2">👥 Page Visits</p>
                <p className="text-3xl md:text-4xl font-bold text-white">{pageVisits}</p>
              </div>
              <p className="text-gray-400 text-xs md:text-sm mt-2 md:mt-3">Total page visits</p>
            </div>

            <div className="hidden md:block w-px h-20 bg-gray-700"></div>

            <div className="text-center flex-1 text-xs md:text-sm text-gray-400">
              <p className="mb-1 md:mb-2">✨ Thank you for using</p>
              <p className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Marriage Biodata Generator</p>
              <p>Making matrimonial connections easier</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-4 md:mt-6 pt-4 md:pt-6 text-center text-gray-500 text-xs md:text-sm">
            <p>© 2026 Marriage Biodata Generator • No data is stored • Completely Private & Secure</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
