const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
    let token;
    let authHandler = req.headers.Authorization || req.headers.authorization;

    if (authHandler && authHandler.startsWith('Bearer')) {
        token = authHandler.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({message: "User is not authorized"})
            }
            req.user = decoded.user;
            next();
        })
        if (!token) {
            res.status(401).json({message: "user is not authorized or token is missing"});
        }
    }
}


module.exports = validateToken;
