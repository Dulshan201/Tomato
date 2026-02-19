# �️ SauceShop - Premium Artisan Sauce Store

A modern full-stack MERN e-commerce application for selling premium artisan sauces, featuring a React frontend with Vite, dark mode support, and Express.js backend with MongoDB integration.

## 🚀 Live Demo
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000

## 📱 Features
- 🌶️ Premium sauce catalog with categories (Hot Sauce, BBQ, Asian, Specialty, etc.)
- 🌓 **Dark Mode Toggle** - Seamless light/dark theme switching with persistent preferences
- 🛒 Shopping cart with real-time updates
- 👤 User authentication (register/login)
- 📦 Order placement and tracking
- 💳 Order management system
- 📱 Fully responsive design for all devices
- 🎨 Modern UI with smooth transitions and CSS variables

## Project Structure

```
SauceShop/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Reusable components (Navbar with theme toggle, etc.)
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context for state management
│   │   ├── assets/       # Sauce catalog data and images
│   │   └── index.css     # Global styles with CSS variables for theming
│   └── package.json
├── backend/           # Express.js backend
│   ├── controllers/     # API controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   └── package.json
└── README.md
```

## Features

### Frontend
- React with Vite for fast development
- **Dark Mode** - Toggle between light and dark themes (preference saved in localStorage)
- React Router for navigation
- Context API for state management
- CSS Variables for dynamic theming
- Responsive design
- User authentication UI
- Shopping cart functionality
- Order placement system
- Sauce catalog with 8 categories:
  - Hot Sauce
  - BBQ Sauce
  - Asian Sauce
  - Specialty
  - Marinade
  - Organic
  - Dipping
  - Premium

### Backend
- Express.js REST API
- MongoDB with Mongoose (with fallback for demo)
- JWT authentication
- File upload for images
- CORS enabled
- User management
- Sauce catalog management
- Cart management
- Order processing

## API Endpoints

### Sauce Management
- `GET /api/food/list` - Get all sauce products
- `POST /api/food/add` - Add new sauce product (with image upload)
- `POST /api/food/remove` - Remove sauce product

### User Management
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login

### Cart Management
- `POST /api/cart/add` - Add item to cart (requires auth)
- `POST /api/cart/remove` - Remove item from cart (requires auth)
- `POST /api/cart/get` - Get user's cart (requires auth)

### Order Management
- `POST /api/order/place` - Place order (requires auth)
- `POST /api/order/userorders` - Get user orders (requires auth)
- `GET /api/order/list` - Get all orders (admin)
- `POST /api/order/status` - Update order status (admin)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Git
- MongoDB (optional - app includes fallback data)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/SauceShop.git
   cd SauceShop
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   npm start
   ```
   Backend runs on http://localhost:4000

3. **Setup Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Frontend runs on http://localhost:5173

4. **Open your browser** and navigate to http://localhost:5173

### Demo Login
- Email: `demo@example.com`
- Password: `password123`

## Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/sauceshop
JWT_SECRET=your_jwt_secret_here
PORT=4000
```

## Demo Features

The application includes fallback functionality that works without MongoDB:
- Static sauce catalog data is served when database is unavailable
- In-memory cart storage for demo purposes
- Demo user authentication (email: demo@example.com, password: password123)
- Dark mode preference persists in browser localStorage

## Dark Mode

The application features a complete dark mode implementation:
- Toggle between light and dark themes using the button in the navbar (🌙/☀️)
- Theme preference is saved in localStorage and persists across sessions
- Smooth transitions between themes
- All components are fully styled for both themes
- CSS variables make theme management clean and maintainable

## Technologies Used

### Frontend
- React 18
- Vite
- React Router DOM
- Axios for API calls
- CSS3 for styling

### Backend
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- Multer for file uploads
- CORS for cross-origin requests
- Validator for input validation

## Current Status

✅ Backend API server running on port 4000
✅ Frontend development server running on port 5173
✅ API endpoints configured and working
✅ Frontend-backend communication established
✅ User authentication system implemented
✅ Shopping cart functionality working
✅ Order placement system ready
✅ Fallback data system for demo purposes
✅ **Dark mode fully implemented with theme persistence**
✅ **Sauce catalog with 32 premium products across 8 categories**
✅ **Complete UI rebranding for sauce shop**

## 🚀 Deployment to Vercel

This application is fully configured for Vercel deployment. You can deploy both the frontend and backend separately.

### Prerequisites for Deployment

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **MongoDB Atlas**: Set up a cloud database at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
3. **GitHub/GitLab Account**: Push your code to a repository

### Deploy Backend (API)

1. **Install Vercel CLI** (optional, for command line deployment):
   ```bash
   npm install -g vercel
   ```

2. **Set up environment variables**:
   - Go to your Vercel project settings
   - Add the following environment variables:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: A strong random secret key
     - `FRONTEND_URL`: Your deployed frontend URL

3. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub/GitLab repository
   - Set **Root Directory** to `backend`
   - Click **Deploy**

4. **Or deploy via CLI**:
   ```bash
   cd backend
   vercel
   ```

5. **Note your API URL**: e.g., `https://your-backend.vercel.app`

### Deploy Frontend

1. **Update API endpoint**:
   - Create a `.env` file in the `frontend` directory:
     ```env
     VITE_API_URL=https://your-backend.vercel.app
     ```
   - Update your API calls to use `import.meta.env.VITE_API_URL`

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub/GitLab repository
   - Set **Root Directory** to `frontend`
   - **Framework Preset**: Vite
   - Add environment variable: `VITE_API_URL`
   - Click **Deploy**

3. **Or deploy via CLI**:
   ```bash
   cd frontend
   vercel
   ```

### MongoDB Atlas Setup

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user with username and password
3. Add your IP to the whitelist (or use 0.0.0.0/0 for all IPs)
4. Get your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster.mongodb.net/sauceshop
   ```
5. Add this to your backend environment variables in Vercel

### Post-Deployment

- Visit your frontend URL to see the live site
- Test authentication and cart functionality
- Monitor logs in Vercel dashboard for any issues

### Quick Deploy Commands

```bash
# Clone and setup
git clone <your-repo-url>
cd SauceShop

# Deploy backend
cd backend
vercel --prod

# Deploy frontend
cd ../frontend
vercel --prod
```

### Important Notes

- ✅ `vercel.json` files are already configured for both frontend and backend
- ✅ Backend is configured for serverless functions
- ✅ Frontend includes proper build configuration for Vite
- ✅ CORS is configured (update if needed based on your domains)
- ⚠️ Remember to update environment variables in Vercel dashboard
- ⚠️ Update `FRONTEND_URL` in backend env and `VITE_API_URL` in frontend env

## Known Issues

- MongoDB connection required for full functionality (fallback data available)
- Some ESLint warnings in frontend (non-breaking)
- Deprecated punycode module warning (non-breaking)

## Next Steps

1. Set up MongoDB for persistent data storage
2. Add image upload functionality
3. Implement payment gateway integration
4. Add admin panel for order management
5. Deploy to production environment
