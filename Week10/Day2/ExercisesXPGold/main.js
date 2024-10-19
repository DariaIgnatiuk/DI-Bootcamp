// Exercise 1: Class Inheritance with Protected Access Modifiers
var RectangleImpl = /** @class */ (function () {
    function RectangleImpl(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }
    RectangleImpl.prototype.getArea = function () {
        return this.width * this.height;
    };
    RectangleImpl.prototype.getPerimeter = function () {
        return 2 * this.width + 2 * this.height;
    };
    return RectangleImpl;
}());
var rec = new RectangleImpl('white', 2, 3);
console.log(rec.getArea(), rec.getPerimeter());
