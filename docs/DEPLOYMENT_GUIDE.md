# Marriage Biodata Website - Development & Deployment Guide

## Project Overview
Minimal-cost marriage biodata website using:
- **Backend:** Python Azure Functions (Serverless)
- **Frontend:** React SPA (Node.js)
- **Storage:** Azure Blob Storage (JSON files, no database)
- **Hosting:** Azure Static Web Apps (Frontend) + Azure Functions (Backend)
- **Cost:** ~$0-2/month (within free tier limits)

---

## Architecture

```
┌─────────────────┐         ┌──────────────────────┐         ┌──────────────┐
│  React SPA      │────────▶│ Azure Functions      │────────▶│ Blob Storage │
│  (Frontend)     │         │ (Python Backend)     │         │ (JSON Files) │
└─────────────────┘         └──────────────────────┘         └──────────────┘
   Static Web Apps            App Service Plan              Storage Account
                             (Consumption Tier)
```

---

## Local Development Setup

### Prerequisites
1. **Node.js & npm** (v16+): https://nodejs.org/
2. **Python** (v3.11): https://www.python.org/
3. **Azure Functions Core Tools**: 
   ```
   npm install -g azure-functions-core-tools@4
   ```
4. **Git**: https://git-scm.com/

### Backend Setup (Python Azure Functions)

1. Navigate to backend folder:
   ```
   cd backend
   ```

2. Create Python virtual environment:
   ```
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Copy environment variables:
   ```
   copy .env.example .env.local
   ```

5. Start Azure Storage Emulator (or use cloud storage):
   - Download: https://go.microsoft.com/fwlink/?linkid=717179
   - Or use connection string in `.env`

6. Run Functions locally:
   ```
   func start
   ```
   Backend will run on: `http://localhost:7071`

### Frontend Setup (React)

1. Navigate to frontend folder:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start development server:
   ```
   npm run dev
   ```
   Frontend will run on: `http://localhost:3000`

---

## Local Testing

### Test Backend API

**Health Check:**
```bash
curl http://localhost:7071/api/health
```

**Create Biodata:**
```bash
curl -X POST http://localhost:7071/api/biodata \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "age": 28,
    "gender": "Male",
    "religion": "Hindu",
    "education": "B.Tech",
    "occupation": "Software Engineer",
    "height": "5'10\"",
    "location": "New York"
  }'
```

**Get All Biodata:**
```bash
curl http://localhost:7071/api/biodata
```

**Search Biodata:**
```bash
curl -X POST http://localhost:7071/api/biodata/search \
  -H "Content-Type: application/json" \
  -d '{"gender": "Female", "religion": "Hindu"}'
```

### Test Frontend

1. Open browser: `http://localhost:3000`
2. You should see the Marriage Biodata Portal
3. Test features:
   - Add new biodata
   - Search by filters
   - Delete biodata
   - View all profiles

---

## Deployment to Azure

### Prerequisites
1. Azure Account: https://azure.microsoft.com/free/
2. Azure CLI: https://learn.microsoft.com/cli/azure/install-azure-cli
3. GitHub Account: https://github.com/

### Step 1: Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/biodata-website.git
git push -u origin main
```

### Step 2: Create Azure Resources

**Login to Azure:**
```bash
az login
```

**Create Resource Group:**
```bash
az group create \
  --name biodata-rg \
  --location eastus
```

**Create Storage Account:**
```bash
az storage account create \
  --name biodatastorage123 \
  --resource-group biodata-rg \
  --location eastus \
  --sku Standard_LRS
```

**Create Blob Container:**
```bash
az storage container create \
  --name biodata \
  --account-name biodatastorage123
```

**Create App Service Plan (Free Tier):**
```bash
az appservice plan create \
  --name biodata-plan \
  --resource-group biodata-rg \
  --sku FREE \
  --is-linux
```

**Create Function App:**
```bash
az functionapp create \
  --resource-group biodata-rg \
  --consumption-plan-location eastus \
  --runtime python \
  --runtime-version 3.11 \
  --functions-version 4 \
  --name biodataapi-func \
  --storage-account biodatastorage123
```

### Step 3: Deploy Backend (Azure Functions)

```bash
cd backend
func azure functionapp publish biodataapi-func
```

### Step 4: Deploy Frontend (Static Web Apps)

**Create Static Web App:**
```bash
az staticwebapp create \
  --name biodata-portal \
  --resource-group biodata-rg \
  --source https://github.com/yourusername/biodata-website.git \
  --location eastus \
  --branch main \
  --app-location "frontend" \
  --build-folder "dist" \
  --output-location "dist"
```

### Step 5: Configure CORS & Connection Strings

**Get Storage Connection String:**
```bash
az storage account show-connection-string \
  --name biodatastorage123 \
  --resource-group biodata-rg
```

**Update Function App Settings:**
```bash
az functionapp config appsettings set \
  --name biodataapi-func \
  --resource-group biodata-rg \
  --settings \
    AZURE_STORAGE_CONNECTION_STRING="your-connection-string" \
    BLOB_CONTAINER_NAME="biodata" \
    FRONTEND_URL="https://yourdomain.com"
```

---

## Cost Estimation

| Service | Free Tier | Cost/Month |
|---------|-----------|-----------|
| Azure Static Web Apps | 1 app free | $0 |
| Azure Functions | 1M requests/month | $0 (within limit) |
| Blob Storage | 5GB free | $0 (< 5GB) |
| Data Transfer | 1GB/month free | $0 (usually free) |
| **Total** | | **$0-5** |

### To Stay Within Free Tier:
- Keep biodata < 5GB
- Use < 1M function calls/month (avg 33k/day)
- Don't exceed data transfer limits
- Monitor via Azure Cost Management

---

## File Structure

```
Biodata_Project/
├── backend/                     # Python Azure Functions
│   ├── HttpTrigger/
│   │   └── function_app.py      # Main API endpoints
│   ├── requirements.txt          # Python dependencies
│   ├── host.json                 # Functions configuration
│   ├── local.settings.json       # Local development settings
│   └── .env.example              # Environment template
│
├── frontend/                     # React SPA
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── BioDataForm.jsx
│   │   │   ├── BioDataList.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # Entry point
│   ├── index.html                # HTML template
│   ├── package.json              # Node.js dependencies
│   ├── vite.config.js            # Vite build configuration
│   └── .gitignore
│
└── docs/                         # Documentation
    └── DEPLOYMENT_GUIDE.md
```

---

## Key Features

✅ **Biodata Management**
- Add new biodata with details (name, age, gender, religion, education, occupation, height, location, about)
- View all biodata profiles
- Search/filter by multiple criteria
- Delete biodata

✅ **User Experience**
- Responsive design (mobile, tablet, desktop)
- Clean, modern UI with Tailwind CSS
- Real-time search filtering
- Form validation

✅ **Backend API**
- RESTful endpoints (CRUD operations)
- Azure Blob Storage integration
- CORS enabled for frontend
- Error handling

---

## Troubleshooting

### Backend won't start
- Ensure Python 3.11+ is installed
- Check Azure Functions Core Tools version
- Clear `__pycache__` folder

### Frontend can't connect to backend
- Verify backend is running on `http://localhost:7071`
- Check CORS settings in `backend/host.json`
- Clear browser cache and reload

### Storage connection issues
- Use Azure Storage Emulator or cloud connection string
- Verify `AZURE_STORAGE_CONNECTION_STRING` in settings
- Check blob container exists

### Deployment fails
- Ensure GitHub repo is public or credentials correct
- Check Azure CLI is authenticated: `az login`
- Verify resource group and app names are unique

---

## Next Steps

1. **Add Authentication:** Implement login with Azure AD B2C
2. **Add Photos:** Allow users to upload profile photos to Blob Storage
3. **Add Messaging:** Simple messaging system between users
4. **Add Custom Domain:** Point your domain to Static Web Apps
5. **Monitor Usage:** Set up Azure Monitor/Application Insights

---

## Support & Resources

- Azure Functions Docs: https://learn.microsoft.com/azure/azure-functions/
- Static Web Apps: https://learn.microsoft.com/azure/static-web-apps/
- React Docs: https://react.dev/
- Blob Storage: https://learn.microsoft.com/azure/storage/blobs/

---

**Last Updated:** February 2026
