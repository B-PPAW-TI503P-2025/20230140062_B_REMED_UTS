const Book = require('../models/book');
const BorrowLog = require('../models/borrowLog');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createBook = async (req, res) => {
    try {
        const { title, author, stock } = req.body;
        if (!title || title.trim() === "" || !author || author.trim() === "") {
            return res.status(400).json({ message: "Validasi Gagal: Title dan Author tidak boleh kosong" });
        }
        const newBook = await Book.create({ title, author, stock });
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        await Book.destroy({ where: { id: req.params.id } });
        res.json({ message: "Buku berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { title, author, stock } = req.body;
        if (!title || title.trim() === "" || !author || author.trim() === "") {
            return res.status(400).json({ message: "Validasi Gagal: Title dan Author tidak boleh kosong" });
        }
        const [updated] = await Book.update({ title, author, stock }, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ message: "Buku tidak ditemukan" });
        res.json({ message: "Buku berhasil diperbarui" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.borrowBook = async (req, res) => {
    try {
        const { bookId, latitude, longitude } = req.body;
        const userId = req.headers['x-user-id'];

        const book = await Book.findByPk(bookId);
        if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
        if (book.stock <= 0) return res.status(400).json({ message: "Stok buku habis" });

        book.stock -= 1;
        await book.save();

        const log = await BorrowLog.create({
            userId,
            bookId,
            latitude,
            longitude
        });

        res.status(201).json({ message: "Peminjaman berhasil dicatat", data: log });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Buku tidak ditemukan" });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};