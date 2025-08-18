import userModel from "../models/userModel.js";

// In-memory cart storage as fallback
let fallbackCarts = {};

// add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log("MongoDB error, using fallback cart:", error.message);
        // Fallback cart functionality
        const userId = req.body.userId || 'demo_user';
        if (!fallbackCarts[userId]) fallbackCarts[userId] = {};
        
        if (!fallbackCarts[userId][req.body.itemId]) {
            fallbackCarts[userId][req.body.itemId] = 1;
        } else {
            fallbackCarts[userId][req.body.itemId] += 1;
        }
        res.json({ success: true, message: "Added To Cart" });
    }
};

// remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Removed From Cart" });
    } catch (error) {
        console.log("MongoDB error, using fallback cart:", error.message);
        // Fallback cart functionality
        const userId = req.body.userId || 'demo_user';
        if (!fallbackCarts[userId]) fallbackCarts[userId] = {};
        
        if (fallbackCarts[userId][req.body.itemId] > 0) {
            fallbackCarts[userId][req.body.itemId] -= 1;
        }
        res.json({ success: true, message: "Removed From Cart" });
    }
};

// fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log("MongoDB error, using fallback cart:", error.message);
        // Fallback cart functionality
        const userId = req.body.userId || 'demo_user';
        const cartData = fallbackCarts[userId] || {};
        res.json({ success: true, cartData });
    }
};

export { addToCart, removeFromCart, getCart };