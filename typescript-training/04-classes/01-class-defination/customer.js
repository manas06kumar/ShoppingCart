var Customer = /** @class */ (function () {
    function Customer(thefirst, thelast) {
        this.firstname = thefirst;
        this.lastname = thelast;
    }
    return Customer;
}());
//let myCustomer = new Customer();
var myCustomer = new Customer("Manas", "Kumar");
//myCustomer.firstname = "Manas";
//myCustomer.lastname = "kumar";
console.log(myCustomer.firstname + " " + myCustomer.lastname);
