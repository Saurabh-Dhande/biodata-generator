"""
Marriage Biodata Website - Backend API Documentation

Endpoints:
- GET /api/health - Health check
- GET /api/biodata - Get all biodata
- POST /api/biodata - Create new biodata
- GET /api/biodata/{id} - Get single biodata
- PUT /api/biodata/{id} - Update biodata
- DELETE /api/biodata/{id} - Delete biodata
- POST /api/biodata/search - Search biodata

Database Storage: Azure Blob Storage (JSON files)
Authentication: None (open access, add later)
CORS: Enabled for localhost:3000 and localhost:5173
"""

# Example: Create Biodata Request
{
    "name": "John Doe",
    "age": 28,
    "gender": "Male",
    "religion": "Hindu",
    "education": "B.Tech Computer Science",
    "occupation": "Software Engineer",
    "height": "5'10\"",
    "location": "New York, USA",
    "about": "Tech professional looking for a life partner with shared values"
}

# Example: Search Request
{
    "gender": "Female",
    "religion": "Hindu",
    "location": "New York"
}

# Response Format (Success)
{
    "success": true,
    "data": { ... },
    "count": 5
}

# Response Format (Error)
{
    "success": false,
    "error": "error message"
}
