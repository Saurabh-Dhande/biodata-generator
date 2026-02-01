"""
PDF Generator for Biodata using ReportLab
Supports multiple template styles
"""

from reportlab.lib.pagesizes import A4, portrait
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm, inch
from reportlab.lib.colors import HexColor, white, black, grey
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, Image, PageBreak
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from io import BytesIO
import os
from datetime import datetime

class BioDataPDFGenerator:
    """Generate PDF biodata with multiple template styles"""
    
    def __init__(self):
        self.page_width, self.page_height = A4
        self.style_sheet = getSampleStyleSheet()
        self._register_fonts()
        
    def _register_fonts(self):
        """Register additional fonts if available"""
        try:
            fonts_dir = os.path.join(os.path.dirname(__file__), 'fonts')
            if os.path.exists(fonts_dir):
                if os.path.exists(os.path.join(fonts_dir, 'georgia.ttf')):
                    pdfmetrics.registerFont(TTFont('Georgia', os.path.join(fonts_dir, 'georgia.ttf')))
                if os.path.exists(os.path.join(fonts_dir, 'georgia_bold.ttf')):
                    pdfmetrics.registerFont(TTFont('Georgia-Bold', os.path.join(fonts_dir, 'georgia_bold.ttf')))
        except Exception as e:
            print(f"Font registration warning: {e}")

    def generate_ornate_golden_template(self, biodata_data):
        """Generate PDF with ornate golden template (matching the attached image)"""
        buffer = BytesIO()
        
        # Create PDF document
        doc = SimpleDocTemplate(
            buffer,
            pagesize=A4,
            rightMargin=10*mm,
            leftMargin=10*mm,
            topMargin=8*mm,
            bottomMargin=8*mm
        )
        
        # Container for the 'Flowable' objects
        elements = []
        
        # Define styles
        title_style = ParagraphStyle(
            'OrnateTitle',
            parent=self.style_sheet['Normal'],
            fontSize=16,
            textColor=HexColor('#A0826D'),
            spaceAfter=2,
            alignment=1,
            fontName='Helvetica-Bold',
            leading=16
        )
        
        subtitle_style = ParagraphStyle(
            'OrnateSubtitle',
            parent=self.style_sheet['Normal'],
            fontSize=8,
            textColor=HexColor('#A0826D'),
            spaceAfter=6,
            alignment=1,
            fontName='Helvetica-Bold'
        )
        
        section_header_style = ParagraphStyle(
            'SectionHeader',
            parent=self.style_sheet['Normal'],
            fontSize=10,
            textColor=HexColor('#A0826D'),
            spaceAfter=6,
            fontName='Helvetica-Bold'
        )
        
        value_style = ParagraphStyle(
            'Value',
            parent=self.style_sheet['Normal'],
            fontSize=8.5,
            textColor=HexColor('#1F2937'),
            leading=8
        )
        
        # Header with decorations
        header_para = Paragraph('❋ भ श्री गोवर्धन नाम ❋', title_style)
        elements.append(header_para)
        
        # Subtitle
        elements.append(Paragraph('MATRIMONIAL BIODATA', subtitle_style))
        elements.append(Spacer(1, 3*mm))
        
        # Divider
        divider_para = Paragraph('<center>✦ &nbsp; ✦ &nbsp; ✦</center>', 
                                ParagraphStyle('Divider', parent=self.style_sheet['Normal'],
                                            fontSize=10, textColor=HexColor('#A0826D')))
        elements.append(divider_para)
        elements.append(Spacer(1, 3*mm))
        
        # Personal Details Section
        elements.append(Paragraph('PERSONAL DETAILS', section_header_style))
        
        # Adjust alignment and styles for personal details
        personal_data = [
            [
                Paragraph(f"<b>Name:</b> {biodata_data.get('name', 'N/A')}", value_style),
                Paragraph(f"<b>Date of Birth:</b> {biodata_data.get('dateOfBirth', 'N/A')}", value_style)
            ],
            [
                Paragraph(f"<b>Place of Birth:</b> {biodata_data.get('city', 'N/A')}", value_style),
                Paragraph(f"<b>Time of Birth:</b> {biodata_data.get('timeOfBirth', 'N/A')}", value_style)
            ],
            [
                Paragraph(f"<b>Rashi:</b> {biodata_data.get('rashi', 'N/A')}", value_style),
                Paragraph(f"<b>Nakshatra:</b> {biodata_data.get('nakshatra', 'N/A')}", value_style)
            ],
            [
                Paragraph(f"<b>Complexion:</b> {biodata_data.get('complexion', 'N/A')}", value_style),
                Paragraph(f"<b>Height:</b> {biodata_data.get('height', 'N/A')}", value_style)
            ],
            [
                Paragraph(f"<b>Gotra:</b> {biodata_data.get('gotra', 'N/A')}", value_style),
                Paragraph(f"<b>Education:</b> {biodata_data.get('education', 'N/A')}", value_style)
            ]
        ]

        table = Table(personal_data, colWidths=[80*mm, 80*mm])
        table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), HexColor('#F4E3C1')),
            ('TEXTCOLOR', (0, 0), (-1, -1), black),
            ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
            ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
            ('FONTSIZE', (0, 0), (-1, -1), 10),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ]))
        elements.append(table)
        elements.append(Spacer(1, 4*mm))
        
        # Family Details Section
        elements.append(Paragraph('FAMILY DETAILS', section_header_style))
        
        family_data = [
            [
                Paragraph(f"<b style='color: #A0826D; font-size: 7.5px'>Father's Name</b><br/>{biodata_data.get('fatherName', 'N/A')}", value_style),
                Paragraph(f"<b style='color: #A0826D; font-size: 7.5px'>Father's Occupation</b><br/>{biodata_data.get('fatherOccupation', 'N/A')}", value_style)
            ],
            [
                Paragraph(f"<b style='color: #A0826D; font-size: 7.5px'>Mother's Name</b><br/>{biodata_data.get('motherName', 'N/A')}", value_style),
                Paragraph(f"<b style='color: #A0826D; font-size: 7.5px'>Mother's Occupation</b><br/>{biodata_data.get('motherOccupation', 'N/A')}", value_style)
            ],
            [
                Paragraph(f"<b style='color: #A0826D; font-size: 7.5px'>Brother</b><br/>{biodata_data.get('siblings', 'N/A')}", value_style),
                Paragraph(f"<b style='color: #A0826D; font-size: 7.5px'>Sister</b><br/>{biodata_data.get('siblings', 'N/A')}", value_style)
            ],
            [
                Paragraph(f"<b style='color: #A0826D; font-size: 7.5px'>Brother in Law</b><br/>As per Biodata", value_style),
                Paragraph(f"<b style='color: #A0826D; font-size: 7.5px'>Religion</b><br/>{biodata_data.get('religion', 'N/A')}", value_style)
            ],
        ]
        
        family_table = Table(family_data, colWidths=[95*mm, 95*mm])
        family_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), HexColor('#FFFAF0')),
            ('TEXTCOLOR', (0, 0), (-1, -1), HexColor('#1F2937')),
            ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
            ('FONTSIZE', (0, 0), (-1, -1), 8),
            ('LEFTPADDING', (0, 0), (-1, -1), 6),
            ('RIGHTPADDING', (0, 0), (-1, -1), 6),
            ('TOPPADDING', (0, 0), (-1, -1), 5),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
            ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#E5E7EB')),
        ]))
        elements.append(family_table)
        elements.append(Spacer(1, 4*mm))
        
        # Bottom footer
        footer_para = Paragraph('<center>❋ भ श्री गोवर्धन नाम ❋</center>', 
                               ParagraphStyle('Footer', parent=self.style_sheet['Normal'],
                                           fontSize=9, textColor=HexColor('#A0826D'), fontName='Helvetica-Bold'))
        elements.append(footer_para)
        
        # Build PDF
        doc.build(elements)
        buffer.seek(0)
        return buffer

    def generate_classic_template(self, biodata_data):
        """Generate PDF with classic professional template"""
        return self.generate_ornate_golden_template(biodata_data)

    def generate_modern_template(self, biodata_data):
        """Generate PDF with modern template"""
        return self.generate_ornate_golden_template(biodata_data)

    def generate_traditional_template(self, biodata_data):
        """Generate PDF with traditional template"""
        return self.generate_ornate_golden_template(biodata_data)

    def generate_pdf(self, biodata_data, template_name='template1'):
        """
        Generate PDF based on template selection
        
        Args:
            biodata_data: Dictionary with biodata information
            template_name: Template identifier (template1-6)
        
        Returns:
            BytesIO object with PDF content
        """
        template_map = {
            'template1': self.generate_classic_template,
            'template2': self.generate_modern_template,
            'template3': self.generate_traditional_template,
            'template4': self.generate_ornate_golden_template,
            'template5': self.generate_classic_template,
            'template6': self.generate_ornate_golden_template,
        }
        
        generator = template_map.get(template_name, self.generate_classic_template)
        return generator(biodata_data)
