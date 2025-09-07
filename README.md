# ItemVault - MERN Stack Application

A full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, item management, and a beautiful dark-themed UI. Users can sign up, log in, and manage items securely with a fully responsive, API-protected interface.

## Features

### Backend Features
- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **User Management**: User registration and login with validation
- **Item Management**: CRUD operations for user items
- **Search & Filter**: Search items by title/description and sort by various criteria
- **Security**: Protected routes, input validation, and error handling
- **Database**: MongoDB with Mongoose ODM

### Frontend Features
- **Dark Theme UI**: Beautiful, modern dark-themed interface
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Authentication**: Login/signup forms with validation
- **Dashboard**: User dashboard with item management
- **Real-time Updates**: Dynamic item creation, editing, and deletion
- **Search & Filter**: Advanced search and sorting functionality
- **State Management**: React Context API for authentication and toast notifications
- **User Profile**: Profile dropdown with user information
- **Toast Notifications**: User-friendly notification system
- **Loading States**: Comprehensive loading indicators throughout the app

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling framework with PostCSS and Autoprefixer
- **Axios** - HTTP client
- **Context API** - State management

## Project Structure

```
ItemVault/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── itemController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   └── Item.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── items.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Common/
│   │   │   │   ├── Alert.js
│   │   │   │   ├── LoadingSpinner.js
│   │   │   │   ├── ProtectedRoute.js
│   │   │   │   └── Toast.js
│   │   │   ├── Items/
│   │   │   │   ├── ItemCard.js
│   │   │   │   ├── ItemForm.js
│   │   │   │   └── SearchFilter.js
│   │   │   ├── Layout/
│   │   │   │   ├── Header.js
│   │   │   │   └── Layout.js
│   │   │   └── Profile/
│   │   │       └── ProfileDropdown.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   └── ToastContext.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   └── Signup.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── MONGODB_SETUP.md
├── setup.md
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Quick Setup
For a quick start, refer to the `setup.md` file in the root directory for streamlined setup instructions.

### MongoDB Setup
For detailed MongoDB setup instructions (including MongoDB Atlas), refer to the `MONGODB_SETUP.md` file in the root directory.

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   # For local MongoDB
   DB_URI=mongodb://localhost:27017/itemvault
   
   # For MongoDB Atlas (recommended)
   # DB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/itemvault?retryWrites=true&w=majority
   
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=5000
   NODE_ENV=development
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

5. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

   The backend server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables (Optional)**
   Create a `.env` file in the frontend directory if you want to customize the API URL:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Items
- `GET /api/items` - Get all items for logged-in user (protected)
- `POST /api/items` - Create new item (protected)
- `PUT /api/items/:id` - Update item (protected)
- `DELETE /api/items/:id` - Delete item (protected)

### Query Parameters for Items
- `search` - Search by title or description
- `sort` - Sort by: `newest`, `oldest`, or `title`

## Usage

1. **Register/Login**: Create an account or login with existing credentials
2. **Dashboard**: Access your personal dashboard after authentication
3. **Add Items**: Click "Add New Item" to create new items
4. **Manage Items**: Edit or delete existing items
5. **Search & Filter**: Use the search bar and sort options to find items
6. **Logout**: Click the logout button to sign out

## Deployment

### Backend Deployment (Render/Heroku)

1. **Prepare for deployment**
   - Update environment variables in your hosting platform
   - Ensure MongoDB Atlas connection string is set
   - Update CORS settings for production domain

2. **Deploy to Render**
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables

### Frontend Deployment (Vercel/Netlify)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `build`
   - Add environment variables

## Environment Variables

### Backend (.env)
```env
# For local MongoDB
DB_URI=mongodb://localhost:27017/itemvault

# For MongoDB Atlas (recommended for production)
# DB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/itemvault?retryWrites=true&w=majority

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Additional Documentation

This project includes additional setup and configuration files:

- **`setup.md`** - Quick setup guide with streamlined instructions
- **`MONGODB_SETUP.md`** - Detailed MongoDB setup guide including MongoDB Atlas configuration

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy Coding! 🚀**
