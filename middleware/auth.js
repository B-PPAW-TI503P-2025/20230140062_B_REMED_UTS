const authMiddleware = (req, res, next) => {
    const userRole = req.headers['x-user-role'];

    if (!userRole) {
        return res.status(401).json({ message: 'Akses ditolak: Header x-user-role diperlukan' });
    }

    req.userRole = userRole;
    next();
};

module.exports = authMiddleware;