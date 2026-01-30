const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/auth.js');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

router.post('/', authMiddleware, (req, res, next) => {
    if (req.userRole !== 'admin') return res.status(403).json({ message: "Forbidden: Admin Only" });
    next();
}, bookController.createBook);

router.delete('/:id', authMiddleware, (req, res, next) => {
    if (req.userRole !== 'admin') return res.status(403).json({ message: "Forbidden: Admin Only" });
    next();
}, bookController.deleteBook);

router.put('/:id', authMiddleware, (req, res, next) => {
    if (req.userRole !== 'admin') return res.status(403).json({ message: "Forbidden: Admin Only" });
    next();
}, bookController.updateBook);

router.post('/borrow', authMiddleware, (req, res, next) => {
    if (req.userRole !== 'user') return res.status(403).json({ message: "Forbidden: User Only" });
    if (!req.headers['x-user-id']) return res.status(400).json({ message: "Header x-user-id diperlukan" });
    next();
}, bookController.borrowBook);

module.exports = router;