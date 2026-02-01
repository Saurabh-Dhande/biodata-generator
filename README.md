# README

## Marriage Biodata Website

A minimal-cost, serverless marriage biodata portal built with Python backend and React frontend, deployed on Azure.

**Cost:** ~$0-2/month | **Tech Stack:** Python + React + Azure Serverless

### Quick Start

#### Backend (Python Azure Functions)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
func start
```
Runs on: http://localhost:7071

#### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
Runs on: http://localhost:3000

### Features
✅ Add/view/search marriage biodata  
✅ Responsive mobile-friendly UI  
✅ Search filters (gender, religion, location, age)  
✅ Zero database cost (JSON blob storage)  
✅ Deployment ready for Azure  

### Deployment
See [DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) for full Azure deployment instructions.

### Tech Stack
- **Backend:** Python, Azure Functions, Azure Blob Storage
- **Frontend:** React, Vite, Tailwind CSS
- **Hosting:** Azure Static Web Apps + Azure Functions
- **Database:** None (serverless JSON storage)

### File Structure
```
├── backend/          # Python Azure Functions API
├── frontend/         # React SPA
└── docs/            # Documentation
```

For detailed setup and deployment, see documentation folder.
