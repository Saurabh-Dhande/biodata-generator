#!/bin/bash
# Quick Start Script for Marriage Biodata Website

echo "========================================"
echo "Marriage Biodata Website - Quick Start"
echo "========================================"
echo ""

# Backend Setup
echo "Step 1: Setting up Backend (Python)"
echo "------------------------------------"
cd backend

echo "Creating Python virtual environment..."
python -m venv venv
source venv/Scripts/activate  # Windows: venv\Scripts\activate

echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Copying environment file..."
cp .env.example .env

echo ""
echo "Backend setup complete!"
echo "To start backend: cd backend && func start"
echo "Backend will run on: http://localhost:7071"
echo ""

# Frontend Setup
echo "Step 2: Setting up Frontend (React)"
echo "------------------------------------"
cd ../frontend

echo "Installing Node.js dependencies..."
npm install

echo ""
echo "Frontend setup complete!"
echo "To start frontend: cd frontend && npm run dev"
echo "Frontend will run on: http://localhost:3000"
echo ""

echo "========================================"
echo "Setup Complete!"
echo "========================================"
echo ""
echo "NEXT STEPS:"
echo "1. Open two terminals"
echo "2. In Terminal 1: cd backend && func start"
echo "3. In Terminal 2: cd frontend && npm run dev"
echo "4. Open browser: http://localhost:3000"
echo ""
echo "For deployment guide, see: docs/DEPLOYMENT_GUIDE.md"
