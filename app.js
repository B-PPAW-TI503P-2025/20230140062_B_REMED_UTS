const express = require('express');
const sequelize = require('./config/database');
const Book = require('./models/book');
const BorrowLog = require('./models/borrowLog');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());
app.use('/api/books', bookRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created in MySQL Workbench!');
    })
    .catch(err => {
        console.error('Unable to connect to database:', err);
    });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});