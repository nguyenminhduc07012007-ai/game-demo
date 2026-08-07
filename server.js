const express = require('express');
const path = require('path');
const app = express();

// Phục vụ file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Chạy server lắng nghe tất cả các thiết bị trong mạng Wi-Fi
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server đang chạy! Bạn có thể truy cập bằng IP port 3000.`);
});module.exports = app;