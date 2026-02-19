# 🚀 Quick Deployment Guide for Vercel

## Step 1: Prepare Your Repository

```bash
# Ensure all files are committed
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 2: Deploy Backend

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your repository
3. Configure:
   - **Root Directory**: `backend`
   - **Framework Preset**: Other
4. Add Environment Variables:
   - `MONGODB_URI`: `mongodb+srv://username:password@cluster.mongodb.net/sauceshop`
   - `JWT_SECRET`: `your-secret-key-here`
   - `FRONTEND_URL`: `https://your-frontend.vercel.app`
5. Click **Deploy**
6. Copy your backend URL (e.g., `https://sauceshop-backend.vercel.app`)

## Step 3: Deploy Frontend

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your repository again
3. Configure:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite
4. Add Environment Variables:
   - `VITE_API_URL`: `https://your-backend.vercel.app` (from Step 2)
5. Click **Deploy**

## Step 4: Update Backend CORS

Go back to your backend deployment in Vercel:
1. Settings → Environment Variables
2. Update `FRONTEND_URL` with your actual frontend URL
3. Redeploy the backend

## Done! 🎉

Your SauceShop is now live on Vercel!

## Alternative: CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy Backend
cd backend
vercel --prod

# Deploy Frontend
cd ../frontend
vercel --prod
```

## Need MongoDB?

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist IP: 0.0.0.0/0 (for Vercel)
5. Get connection string and add to Vercel environment variables
