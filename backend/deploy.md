# Quick Deployment Checklist

## Before Deploying to Render:

1. **✅ Backend Code Updated**
   - Server.js configured for production
   - Package.json with proper engines
   - Environment variables documented

2. **🔧 Set Up MongoDB Atlas:**
   - Create free cluster
   - Create database user
   - Get connection string
   - Whitelist all IPs (0.0.0.0/0)

3. **🚀 Deploy to Render:**
   - Connect GitHub repository
   - Set root directory to `backend`
   - Add environment variables
   - Deploy

4. **🔗 Update Frontend:**
   - Set `REACT_APP_API_URL` in Vercel
   - Test connection

## Environment Variables for Render:

```
NODE_ENV=production
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/itemvault?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

## Test Endpoints:

- Health: `https://your-app.onrender.com/api/health`
- Root: `https://your-app.onrender.com/`
- Auth: `https://your-app.onrender.com/api/auth`
- Items: `https://your-app.onrender.com/api/items`
