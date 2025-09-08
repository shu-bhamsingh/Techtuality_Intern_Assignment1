# Render Deployment Guide for ItemVault Backend

## Overview
This guide will help you deploy the ItemVault backend API to Render, a modern cloud platform for hosting web services.

## Prerequisites
- GitHub repository with your backend code
- MongoDB Atlas account (for database)
- Render account (free tier available)

## Step 1: Prepare Your Backend

### ✅ Backend is Already Configured
The backend has been updated with the following Render-ready configurations:

1. **Updated `package.json`:**
   - Added Node.js engine requirements (>=18.0.0)
   - Added build script for Render
   - Optimized for production deployment

2. **Enhanced `server.js`:**
   - Production-ready CORS configuration
   - Graceful shutdown handling
   - Health check endpoint
   - Better error handling
   - Bind to `0.0.0.0` for Render compatibility

3. **Environment Variables:**
   - Created `.env.example` with all required variables

## Step 2: Set Up MongoDB Atlas

1. **Create MongoDB Atlas Account:**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account
   - Create a new cluster (free tier: M0)

2. **Configure Database:**
   - Create a database named `itemvault`
   - Create a user with read/write permissions
   - Whitelist all IP addresses (0.0.0.0/0) for Render
   - Get your connection string

3. **Connection String Format:**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/itemvault?retryWrites=true&w=majority
   ```

## Step 3: Deploy to Render

### 3.1 Create New Web Service
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select your repository

### 3.2 Configure Build Settings
- **Name:** `itemvault-backend` (or your preferred name)
- **Environment:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Root Directory:** `backend`

### 3.3 Set Environment Variables
Add these environment variables in Render dashboard:

```
NODE_ENV=production
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/itemvault?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

**Important Notes:**
- Replace `username:password` with your MongoDB Atlas credentials
- Replace `cluster` with your actual cluster name
- Generate a strong JWT_SECRET (use a random string generator)
- Update FRONTEND_URL with your actual Vercel frontend URL

### 3.4 Advanced Settings
- **Auto-Deploy:** Yes (deploys on every push to main branch)
- **Health Check Path:** `/api/health`
- **Instance Type:** Free tier (or upgrade as needed)

## Step 4: Deploy and Test

1. **Deploy:**
   - Click "Create Web Service"
   - Render will build and deploy your application
   - Wait for deployment to complete (usually 2-5 minutes)

2. **Test Your API:**
   - Your API will be available at: `https://your-app-name.onrender.com`
   - Test health endpoint: `https://your-app-name.onrender.com/api/health`
   - Test root endpoint: `https://your-app-name.onrender.com/`

## Step 5: Update Frontend Configuration

Update your frontend's API configuration:

1. **In Vercel Dashboard:**
   - Add environment variable: `REACT_APP_API_URL=https://your-app-name.onrender.com/api`

2. **Or in your local `.env` file:**
   ```
   REACT_APP_API_URL=https://your-app-name.onrender.com/api
   ```

## Step 6: Domain and SSL

- **Custom Domain:** Render provides free SSL certificates
- **HTTPS:** Automatically enabled for all Render services
- **Custom Domain:** Available in paid plans

## Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check Node.js version compatibility
   - Ensure all dependencies are in `package.json`
   - Check build logs in Render dashboard

2. **Database Connection Issues:**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist settings
   - Ensure database user has correct permissions

3. **CORS Errors:**
   - Verify `FRONTEND_URL` environment variable
   - Check that frontend URL matches exactly

4. **App Crashes:**
   - Check application logs in Render dashboard
   - Verify all environment variables are set
   - Test health endpoint

### Useful Commands:

```bash
# Test health endpoint
curl https://your-app-name.onrender.com/api/health

# Test root endpoint
curl https://your-app-name.onrender.com/

# Check logs (in Render dashboard)
# Go to your service → Logs tab
```

## Render Free Tier Limitations

- **Sleep Mode:** Free services sleep after 15 minutes of inactivity
- **Cold Start:** First request after sleep may take 30+ seconds
- **Build Time:** 500 build minutes per month
- **Bandwidth:** 100GB per month

## Production Recommendations

1. **Upgrade to Paid Plan:**
   - No sleep mode
   - Better performance
   - More resources

2. **Database Optimization:**
   - Use connection pooling
   - Implement proper indexing
   - Monitor query performance

3. **Monitoring:**
   - Set up health checks
   - Monitor error rates
   - Track response times

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `5000` (auto-set by Render) |
| `DB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | JWT signing secret | `your-secret-key` |
| `JWT_EXPIRE` | JWT expiration time | `7d` |
| `FRONTEND_URL` | Frontend URL for CORS | `https://app.vercel.app` |

## Support

- **Render Documentation:** [render.com/docs](https://render.com/docs)
- **MongoDB Atlas:** [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
- **Node.js Best Practices:** [nodejs.org/en/docs/guides](https://nodejs.org/en/docs/guides)

---

**Your backend is now ready for Render deployment! 🚀**
