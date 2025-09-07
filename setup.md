# Quick Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Quick Start

### 1. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
DB_URI=mongodb://localhost:27017/itemvault
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
NODE_ENV=development
```

Start backend:
```bash
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
```

Start frontend:
```bash
npm start
```

### 3. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Features Implemented ✅

### Backend
- ✅ Node.js + Express server with MongoDB connection
- ✅ User model with bcrypt password hashing
- ✅ JWT authentication (signup/login)
- ✅ Item model with user reference
- ✅ Protected routes with JWT middleware
- ✅ CRUD operations for items
- ✅ Search and filter functionality
- ✅ Input validation and error handling
- ✅ Environment variables with dotenv

### Frontend
- ✅ React app with Tailwind CSS
- ✅ Dark theme UI throughout
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Authentication pages (signup/login)
- ✅ Dashboard with item management
- ✅ Context API for state management
- ✅ Search and filter functionality
- ✅ Loading states and error handling
- ✅ Modern, clean UI with hover effects

### Bonus Features
- ✅ Search/filter functionality
- ✅ Comprehensive README with setup instructions
- ✅ Clean folder structure
- ✅ Proper error handling
- ✅ Input validation
- ✅ Responsive design

## Next Steps
1. Start MongoDB service
2. Run backend: `cd backend && npm run dev`
3. Run frontend: `cd frontend && npm start`
4. Open http://localhost:3000
5. Create an account and start using the app!

## Deployment Ready
The application is ready for deployment to:
- Backend: Render, Heroku, Railway
- Frontend: Vercel, Netlify
- Database: MongoDB Atlas
