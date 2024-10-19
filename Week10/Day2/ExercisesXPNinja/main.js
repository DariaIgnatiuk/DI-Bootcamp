// Exercise 1
var Smartphone = /** @class */ (function () {
    function Smartphone(name, price, warrantyPeriod, discount) {
        this.name = name;
        this.price = price;
        this.warrantyPeriod = warrantyPeriod;
        this.discount = discount;
    }
    Smartphone.prototype.getPrice = function () {
        if (this.discount)
            return this.price * this.discount;
        else
            return this.price;
    };
    return Smartphone;
}());
var smartphone = new Smartphone('iPhone 12', 1000, '2 years', 0.9);
console.log(smartphone.getPrice());
// smartphone.name = 'iPhone' //error
