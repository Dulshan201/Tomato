#!/bin/bash
# Quick deployment script for Vercel

echo "🚀 SauceShop Vercel Deployment Helper"
echo "======================================"
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI not found. Installing..."
    npm install -g vercel
else
    echo "✅ Vercel CLI is installed"
fi

echo ""
echo "Choose deployment option:"
echo "1. Deploy Backend"
echo "2. Deploy Frontend"
echo "3. Deploy Both"
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "📦 Deploying Backend..."
        cd backend && vercel --prod
        ;;
    2)
        echo "🎨 Deploying Frontend..."
        cd frontend && vercel --prod
        ;;
    3)
        echo "📦 Deploying Backend..."
        cd backend && vercel --prod
        echo ""
        echo "🎨 Deploying Frontend..."
        cd ../frontend && vercel --prod
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "1. Note your deployment URLs"
echo "2. Update environment variables in Vercel dashboard"
echo "3. Set VITE_API_URL in frontend to your backend URL"
echo "4. Set FRONTEND_URL in backend to your frontend URL"
echo "5. Set MONGODB_URI in backend to your MongoDB Atlas connection string"
echo ""
echo "Visit https://vercel.com/dashboard to manage your deployments"
