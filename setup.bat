@echo off
REM Quick Start Script for Windows - Marriage Biodata Website

echo ========================================
echo Marriage Biodata Website - Quick Start
echo ========================================
echo.

REM Backend Setup
echo Step 1: Setting up Backend (Python)
echo ------------------------------------
cd backend

echo Creating Python virtual environment...
python -m venv venv
call venv\Scripts\activate.bat

echo Installing Python dependencies...
pip install -r requirements.txt

echo Copying environment file...
copy .env.example .env

echo.
echo Backend setup complete!
echo To start backend: cd backend ^&^& func start
echo Backend will run on: http://localhost:7071
echo.

REM Frontend Setup
echo Step 2: Setting up Frontend (React)
echo ------------------------------------
cd ..\frontend

echo Installing Node.js dependencies...
call npm install

echo.
echo Frontend setup complete!
echo To start frontend: cd frontend ^&^& npm run dev
echo Frontend will run on: http://localhost:3000
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo NEXT STEPS:
echo 1. Open two command prompts
echo 2. In CMD 1: cd backend ^&^& func start
echo 3. In CMD 2: cd frontend ^&^& npm run dev
echo 4. Open browser: http://localhost:3000
echo.
echo For deployment guide, see: docs\DEPLOYMENT_GUIDE.md
pause
