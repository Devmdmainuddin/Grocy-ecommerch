
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {

        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Access denied. No token provided.'
            });
        }
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (err) {
        res.status(401).json({
            success: false,
            message: 'Invalid or expired token.'
        });
    }
}

module.exports = authMiddleware;