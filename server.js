const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
});

if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server đang chạy tại http://localhost:${PORT}`);
    });
}

module.exports = app;