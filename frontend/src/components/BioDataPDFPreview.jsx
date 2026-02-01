import { forwardRef } from 'react'
import ClassicTemplate from '../templates/ClassicTemplate';
import ModernTemplate from '../templates/ModernTemplate';
import TraditionalTemplate from '../templates/TraditionalTemplate';
import PremiumGoldTemplate from '../templates/PremiumGoldTemplate';

const BioDataPDFPreview = forwardRef(({ data, template }, ref) => {
  // Render selected template
  const renderTemplate = () => {
    switch (template) {
      case 'template1':
        return <ClassicTemplate data={data} ref={ref} />
      case 'template2':
        return <ModernTemplate data={data} ref={ref} />
      case 'template3':
        return <TraditionalTemplate data={data} ref={ref} />
      case 'template4':
        return <PremiumGoldTemplate data={data} ref={ref} />
      default:
        return <ClassicTemplate data={data} ref={ref} />
    }
  }

  return renderTemplate()
})

BioDataPDFPreview.displayName = 'BioDataPDFPreview'

export default BioDataPDFPreview
