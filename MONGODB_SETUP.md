# MongoDB Atlas Setup Guide

## Quick Setup Options

### Option 1: MongoDB Atlas (Recommended - Free)

1. **Go to [MongoDB Atlas](https://www.mongodb.com/atlas)**
2. **Sign up for a free account**
3. **Create a new project** (e.g., "ItemVault")
4. **Create a free cluster** (M0 Sandbox)
5. **Set up database access:**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Create a username and password (save these!)
   - Set privileges to "Read and write to any database"
6. **Set up network access:**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0) for development
7. **Get your connection string:**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `itemvault`

### Option 2: Use Local MongoDB (Alternative)

If you have MongoDB installed locally, uncomment this line in `.env`:
```
DB_URI=mongodb://localhost:27017/itemvault
```

And comment out the Atlas line:
```
# DB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/itemvault?retryWrites=true&w=majority
```

## Update Your .env File

Replace the placeholder connection string in `backend/.env`:

```env
# Replace this line with your actual MongoDB Atlas connection string:
DB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/itemvault?retryWrites=true&w=majority

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
NODE_ENV=development
```

## Test the Connection

After updating your `.env` file, test the backend:

```bash
cd backend
npm run dev
```

You should see:
```
MongoDB Connected: cluster0-shard-00-00.xxxxx.mongodb.net
Server running in development mode on port 5000
```

## Troubleshooting

### Common Issues:

1. **"ENOTFOUND" error**: Check your connection string format
2. **Authentication failed**: Verify username/password in connection string
3. **Network access denied**: Make sure your IP is whitelisted in Atlas
4. **Database name**: Ensure the database name in the connection string is `itemvault`

### Example Working Connection String:
```
mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/itemvault?retryWrites=true&w=majority
```

## Next Steps

Once MongoDB is connected:
1. Start the backend: `cd backend && npm run dev`
2. Start the frontend: `cd frontend && npm start`
3. Open http://localhost:3000
4. Create an account and start using the app!

## Security Note

- Never commit your `.env` file to version control
- Use strong passwords for your database user
- In production, restrict IP access to your server's IP only
