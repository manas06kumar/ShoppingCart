class CustomerOne {
    private _firstname: string;
    private _lastname: string;

   

    constructor(thefirst:string,thelast:string)
    {
        this._firstname = thefirst;
        this._lastname = thelast;
    }

    public get firstname():string{
        return this._firstname;
    }

    public set firstname(value:string){
        this._firstname = value;
    }

    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }
}

//let myCustomer = new Customer();
let myCustomer = new CustomerOne("Manas", "Kumar");

//myCustomer.firstname = "Manas";
//myCustomer.lastname = "kumar";

console.log(myCustomer.firstname);
console.log(myCustomer.lastname);

//console.log(`${myCustomer.firstname} ${myCustomer.lastname}`);