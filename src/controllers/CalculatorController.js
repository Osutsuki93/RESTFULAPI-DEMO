
class CalculatorController {
    constructor(calculatorService) {
        // Tiêm Service vào Controller (Dependency Injection)
        this.calculatorService = calculatorService;
    }

    calculate(req, res) {
        try {
            // 1. Lấy dữ liệu từ Postman gửi lên
            const { a, b, operator } = req.body; 
            
            // 2. Validate cơ bản
            if (typeof a !== 'number' || typeof  b !== 'number') {
                return res.status(400).json({ error: "a và b phải là số!" });
            }

            let result = 0;

            // 3. Gọi Service để tính toán (Controller không tự tính)
            switch (operator) {
                case 'add': result = this.calculatorService.add(a, b); break;
                case 'sub': result = this.calculatorService.subtract(a, b); break;
                case 'mul': result = this.calculatorService.multiply(a, b); break;
                case 'div': result = this.calculatorService.divide(a, b); break;
                default: 
                    return res.status(400).json({ error: "Phép tính không hợp lệ (add, sub, mul, div)" });
            }

            // 4. Trả kết quả thành công
            return res.status(200).json({
                status: "success",
                data: {
                    a: a,
                    b: b,
                    operator: operator,
                    result: result
                }
            });

        } catch (error) {
            // Bắt lỗi từ Service (ví dụ chia cho 0)
            return res.status(400).json({ status: "error", message: error.message });
        }
    }
}
module.exports = CalculatorController;