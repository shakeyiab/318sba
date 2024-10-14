// middleware/authMiddleware.js
const auth = (req, res, next) => {
    const isAuthenticated = req.headers['authorization'] === 'Bearer secret-token'; // Simple check for example
    if (!isAuthenticated) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next(); // User is authenticated, proceed to the next middleware or route
};

export default auth;
