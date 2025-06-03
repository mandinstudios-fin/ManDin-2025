# ManDin Studios - Professional Payslip System

A modern, industry-standard payslip generation system with automated employee management through JSON configuration.

## Features

✨ **Professional Design**
- Industry-standard styling with elegant typography
- Responsive design for all screen sizes
- Print-optimized layout for PDF generation
- Modern UI with smooth animations

🚀 **Automated Management**
- JSON-based employee data management
- Bulk payslip generation for all employees
- Historical payslip generation for any month
- Real-time calculations with Indian taxation standards

📊 **Comprehensive Salary Structure**
- Basic Salary, HRA, Transport Allowance
- Medical Allowance, Special Allowances
- PF, ESI, Professional Tax, Income Tax (TDS)
- Automatic gross and net salary calculations

🔧 **User-Friendly Interface**
- Employee dropdown selection
- Month picker for historical payslips
- Working days customization
- One-click PDF printing

## Getting Started

### 1. Open the System
Open `professional-payslip.html` in your web browser.

### 2. Load Employee Data
You have two options:

**Option A: Use Sample Data**
- The system comes pre-loaded with sample employee data
- Perfect for testing and demonstration

**Option B: Upload Your Own Data**
1. Click "Download Sample JSON" to get the template
2. Edit the JSON file with your employee information
3. Use "Load Employee Data" to upload your customized file

### 3. Generate Payslips

**For Individual Employee:**
1. Select the payroll month
2. Choose an employee from the dropdown
3. Set working days (default: 22)
4. Click "Generate Payslip"

**For All Employees:**
1. Select the payroll month
2. Set working days
3. Click "Generate All" (bulk generation)

### 4. Print/Save
- Click "Print PDF" to generate a PDF copy
- The system automatically hides controls during printing

## JSON Employee Data Structure

```json
{
  "id": "MS001",                    // Unique employee identifier
  "name": "John Doe",               // Full employee name
  "designation": "Software Engineer", // Job title
  "department": "Development",       // Department/Division
  "joinDate": "2023-01-01",         // Date of joining (YYYY-MM-DD)
  "employmentType": "Full-Time",    // Employment type
  "bankAccount": "****1234",        // Bank account (masked)
  "salary": {
    "basic": 80000,                 // Basic salary amount
    "hra": 32000,                   // House Rent Allowance
    "transport": 3000,              // Transport allowance
    "medical": 2500,                // Medical allowance
    "special": 5000                 // Special allowances (optional)
  },
  "deductions": {
    "pf": 12,                       // PF percentage
    "esi": 1.75,                    // ESI percentage
    "professionalTax": 200,         // Fixed professional tax
    "incomeTax": 8000               // Fixed income tax/TDS
  }
}
```

## Salary Calculations

### Earnings
- **Basic Salary**: As specified in JSON
- **HRA**: As specified in JSON
- **Transport Allowance**: As specified in JSON
- **Medical Allowance**: As specified in JSON
- **Special Allowance**: As specified in JSON (optional)

### Deductions
- **Provident Fund**: (Basic Salary × PF%) ÷ 100
- **ESI**: (Total Earnings × ESI%) ÷ 100
- **Professional Tax**: Fixed amount as specified
- **Income Tax**: Fixed amount as specified

### Net Salary
**Net Salary = Total Earnings - Total Deductions**

## Customization Options

### Working Days
- Default: 22 days per month
- Adjustable for different months
- Affects pro-rata calculations (future feature)

### Historical Payslips
- Generate payslips for any previous month
- Useful for reprints and historical records
- Month picker allows easy selection

### Company Information
To customize company details, edit the following in the HTML file:

```html
<div class="company-name">YOUR COMPANY NAME</div>
<div class="company-tagline">Your Company Tagline</div>
```

And update the footer information:
```html
<div class="footer-row">
    <span class="footer-label">Company Address:</span>
    Your Company Address Here
</div>
```

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Print Features

The system is optimized for printing:
- A4 page size compatibility
- Professional black & white printing
- Automatic control panel hiding
- Print-specific styling
- Proper page breaks

## Security Considerations

- All calculations are performed client-side
- No data is sent to external servers
- JSON files are processed locally
- Sensitive bank information should be masked

## Advanced Usage

### Bulk Operations
1. Load employee JSON file
2. Select "Generate for All Employees"
3. System processes all employees sequentially
4. Individual PDFs can be generated for each employee

### Data Validation
The system validates:
- JSON file format
- Required employee fields
- Numeric values for calculations
- Date formats

### Error Handling
- Clear error messages for invalid data
- Fallback values for missing fields
- User-friendly alerts and notifications

## Support

For technical support or feature requests:
- Email: support@mandinstudios.com
- Documentation: This README file
- Sample files: Included in the package

## License

© 2024 ManDin Studios. All rights reserved.

---

*This system is designed for professional payroll management with industry-standard practices and calculations.*
