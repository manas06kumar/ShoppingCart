class Customer{
    firstname: string;
    lastname:string;

    constructor(thefirst:string,thelast:string)
    {
        this.firstname = thefirst;
        this.lastname = thelast;
    }
}

//let myCustomer = new Customer();
let myCustomer = new Customer("Manas", "Kumar");

//myCustomer.firstname = "Manas";
//myCustomer.lastname = "kumar";

console.log(`${myCustomer.firstname} ${myCustomer.lastname}`);