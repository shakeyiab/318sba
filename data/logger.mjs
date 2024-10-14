// middleware/requestc.js
const loggr = (req, res, next) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
    next(); // Proceed to the next middleware or route handler
};

export default loggr;
