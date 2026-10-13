

class CalculatorService {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Lỗi: Không thể chia cho 0!");
        }
        return a / b;
    }
}
module.exports = CalculatorService;