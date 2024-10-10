// Exercise 1: Class with Access Modifiers
var PremiumUser = /** @class */ (function () {
    function PremiumUser(id, name, email, membershipLevel) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.membershipLevel = membershipLevel;
    }
    PremiumUser.prototype.printUserDetails = function () {
        (this.membershipLevel) ?
            console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email, ", Membership Level: ").concat(this.membershipLevel))
            : console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email));
    };
    return PremiumUser;
}());
var user1 = new PremiumUser(1, 'John Doe', 'john.doe@example.com', 'Gold');
var user2 = new PremiumUser(2, 'Anna Doe', 'anna.doe@example.com');
user1.printUserDetails();
user2.printUserDetails();
