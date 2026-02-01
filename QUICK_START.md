# 🚀 Quick Start Guide - Running Locally

## ⏱️ TL;DR - Fast Setup

### Two Commands to Run Everything

**Terminal 1 (Backend):**
```bash
cd "g:\NR_2025\Project Work\Biodata_Project\backend"
python app.py
```

**Terminal 2 (Frontend):**
```bash
cd "g:\NR_2025\Project Work\Biodata_Project\frontend"
npm run dev
```

Then open: **http://localhost:3000**

---

## 📋 Step-by-Step Setup (First Time)

### 1. Backend Setup (One-time)

```bash
cd "g:\NR_2025\Project Work\Biodata_Project\backend"

# Install Python dependencies
pip install flask flask-cors python-dotenv

# Verify installation
python -c "import flask; print(f'Flask {flask.__version__} installed ✅')"
```

### 2. Frontend Setup (One-time)

```bash
cd "g:\NR_2025\Project Work\Biodata_Project\frontend"

# Install Node dependencies
npm install

# Verify installation
npm list react
```

### 3. Start Both Servers

**Open two separate terminals/command prompts:**

**Terminal 1:**
```bash
cd "g:\NR_2025\Project Work\Biodata_Project\backend"
python app.py
```

You should see:
```
🚀 Marriage Biodata API Server
Running on: http://localhost:7071
```

**Terminal 2:**
```bash
cd "g:\NR_2025\Project Work\Biodata_Project\frontend"
npm run dev
```

You should see:
```
> biodata-website@0.1.0 dev
> vite
```

### 4. Access Application

Open browser: **http://localhost:3000**

---

## 🧪 Testing the Application

### Test Backend API (in PowerShell)

**Health Check:**
```powershell
curl http://localhost:7071/api/health
```

**Get All Profiles:**
```powershell
curl http://localhost:7071/api/biodata
```

**Add New Profile:**
```powershell
$body = @{
    name = "Test User"
    age = 30
    gender = "Male"
    religion = "Hindu"
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:7071/api/biodata `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

### Test Frontend UI

1. ✅ Page should load with header "💍 Marriage Biodata Portal"
2. ✅ Click "➕ Add New Biodata" button to see form
3. ✅ Fill in form and submit
4. ✅ View created profiles in the list
5. ✅ Use search filters to filter profiles
6. ✅ Click delete to remove a profile

---

## 🔗 URLs

| Service | URL | Status |
|---------|-----|--------|
| Frontend | http://localhost:3000 | Browser |
| Backend API | http://localhost:7071 | PowerShell/Postman |
| Health Check | http://localhost:7071/api/health | ✅ |

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `backend/app.py` | Flask backend server |
| `frontend/src/App.jsx` | Main React component |
| `frontend/package.json` | Node dependencies |
| `backend/requirements.txt` | Python dependencies |

---

## ⚠️ If Something Goes Wrong

### Backend won't start
```bash
# Check if port 7071 is free
netstat -ano | findstr :7071

# Kill process on port 7071 if needed
taskkill /PID <PID> /F

# Then restart: python app.py
```

### Frontend won't start
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -r node_modules
npm install

# Retry
npm run dev
```

### CORS errors in browser console
- Ensure backend is running
- Check http://localhost:7071/api/health works
- Clear browser cache: Ctrl+Shift+Delete

### Port already in use
```bash
# Find process using port 3000 (frontend)
netstat -ano | findstr :3000

# Find process using port 7071 (backend)
netstat -ano | findstr :7071

# Kill process: taskkill /PID <PID> /F
```

---

## 🎯 What Each Server Does

### Backend (Flask on 7071)
- ✅ Receives API requests from frontend
- ✅ Manages biodata (create, read, update, delete)
- ✅ Performs searches
- ✅ Returns JSON responses

### Frontend (React on 3000)
- ✅ Displays user interface
- ✅ Sends requests to backend
- ✅ Displays biodata profiles
- ✅ Handles user interactions

---

## 📊 Sample Data for Testing

You can use these profiles to test:

```json
{
  "name": "John Doe",
  "age": 28,
  "gender": "Male",
  "religion": "Hindu",
  "education": "B.Tech",
  "occupation": "Engineer",
  "height": "5'10\"",
  "location": "New Delhi",
  "about": "Seeking a life partner"
}

{
  "name": "Jane Smith",
  "age": 26,
  "gender": "Female",
  "religion": "Christian",
  "education": "MBA",
  "occupation": "Consultant",
  "height": "5'6\"",
  "location": "Bangalore",
  "about": "Looking for someone genuine"
}
```

---

## 🔄 Hot Reload (Auto Refresh)

- **Frontend:** Changes to React files auto-reload in browser (Vite HMR)
- **Backend:** Changes to Python files auto-reload (Flask debug mode)

Just edit and save - browser updates automatically!

---

## 📱 Mobile Testing

Frontend is responsive. Test on mobile by:
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Select mobile device

---

## 🛑 Stopping Servers

**For each terminal:**
```
Press Ctrl+C to stop the server
```

---

## 🚀 Next: Deployment to Azure

When ready to deploy to Azure, see: `docs/DEPLOYMENT_GUIDE.md`

---

**Status: Everything Working ✅**

Both servers are running and communicating successfully!
