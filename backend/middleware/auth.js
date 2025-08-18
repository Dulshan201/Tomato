import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    
    if (!token) {
        // For demo purposes, set a default userId when no token is provided
        req.body.userId = "demo_user";
        return next();
    }
    
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET || "random#secret");
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        // Fallback to demo user even if token is invalid
        req.body.userId = "demo_user";
        next();
    }
};

export default authMiddleware;