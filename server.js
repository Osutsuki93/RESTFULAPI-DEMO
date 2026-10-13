const express = require('express');
const app = express();

// 1. Nhúng 2 file Service và Controller bạn đã viết vào đây
const CalculatorService = require('./src/services/CalculatorService');
const CalculatorController = require('./src/controllers/CalculatorController');

// 2. Cấu hình để Server hiểu được dữ liệu JSON từ Postman gửi lên
app.use(express.json());

// 3. Khởi tạo đối tượng (Lắp ráp kiến trúc)
const calculatorService = new CalculatorService();
const calculatorController = new CalculatorController(calculatorService);

// 4. TẠO ĐƯỜNG LINK API CHÍNH THỨC
// Bất cứ ai gọi Method POST vào link /api/calculate, giao cho Controller xử lý
app.post('/api/calculate', (req, res) => calculatorController.calculate(req, res));

// 5. Bật server chạy trên cổng 3000
app.listen(3000, () => {
    console.log(" Máy chủ API đã khởi động!");
    console.log("http://localhost:3000/api/calculate");
});