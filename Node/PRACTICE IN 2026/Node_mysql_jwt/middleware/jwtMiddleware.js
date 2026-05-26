const db=require("../app");
const jwtVerify=async(req,res,next)=>{
    try {
        const authHeader = req.headers.authorization;
        // Check header exists
        if (!authHeader) {
            return res.status(401).json({
                status: 400,
                message: 'Token missing'
            });
        }
        // Format: Bearer TOKEN
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                status: 400,
                message: 'Invalid token format'
            });
        }
        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        // Store decoded user data
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            status: 400,
            message: 'Invalid or expired token',
            error: error.message
        });
    }
}

module.exports=jwtVerify
