# 🍅 Tomato Food Delivery App

A modern full-stack MERN application for food delivery featuring a React frontend with Vite and Express.js backend with MongoDB integration.

## 🚀 Live Demo
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000

## 📱 Features
- 🛒 Shopping cart with real-time updates
- 👤 User authentication (register/login)
- 🍔 Browse food catalog by categories
- 📦 Order placement and tracking
- 💳 Order management system
- 📱 Responsive design for all devices

## Project Structure

```
Tomato/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context for state management
│   │   └── assets/       # Static assets
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
- React Router for navigation
- Context API for state management
- Responsive design
- User authentication UI
- Shopping cart functionality
- Order placement system

### Backend
- Express.js REST API
- MongoDB with Mongoose (with fallback for demo)
- JWT authentication
- File upload for images
- CORS enabled
- User management
- Food catalog management
- Cart management
- Order processing

## API Endpoints

### Food Management
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (with image upload)
- `POST /api/food/remove` - Remove food item

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
   git clone https://github.com/YOUR_USERNAME/tomato.git
   cd tomato
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
MONGODB_URI=mongodb://localhost:27017/tomato
JWT_SECRET=your_jwt_secret_here
PORT=4000
```

## Demo Features

The application includes fallback functionality that works without MongoDB:
- Static food data is served when database is unavailable
- In-memory cart storage for demo purposes
- Demo user authentication (email: demo@example.com, password: password123)

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
