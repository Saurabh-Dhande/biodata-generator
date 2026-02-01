import { forwardRef } from 'react'
import ClassicTemplate from '../templates/ClassicTemplate';
import ModernTemplate from '../templates/ModernTemplate';
import TraditionalTemplate from '../templates/TraditionalTemplate';
import PremiumGoldTemplate from '../templates/PremiumGoldTemplate';
import CremeClassicTemplate from '../templates/CremeClassicTemplate';
import OrnateGoldenTemplate from '../templates/OrnateGoldenTemplate';

const BioDataPDFPreview = forwardRef(({ data, template }, ref) => {
  // Render selected template
  const renderTemplate = () => {
    switch (template) {
      case 'template1':
        return <ClassicTemplate data={data} />
      case 'template2':
        return <ModernTemplate data={data} />
      case 'template3':
        return <TraditionalTemplate data={data} />
      case 'template4':
        return <PremiumGoldTemplate data={data} />
      case 'template5':
        return <CremeClassicTemplate data={data} />
      case 'template6':
        return <OrnateGoldenTemplate data={data} />
      default:
        return <ClassicTemplate data={data} />
    }
  }

  return (
    <div className="a4-container">
      <div className="a4-card" ref={ref}>
        <div className="a4-sheet">
          {renderTemplate()}
        </div>
      </div>
    </div>
  )
})

BioDataPDFPreview.displayName = 'BioDataPDFPreview'

export default BioDataPDFPreview
